import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { TOKEN_ADDRESS, NFT_ADDRESS, TOKEN_ABI, NFT_ABI } from "./constants";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import TokenPage from "./pages/Token";
import NFTPage from "./pages/NFT";
import "./App.css";

function App() {
  const [account, setAccount] = useState(null);
  const [networkOk, setNetworkOk] = useState(false);

  const [tokenBalance, setTokenBalance] = useState("-");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const [nftUri, setNftUri] = useState("");
  const [txStatus, setTxStatus] = useState("");

  function getProvider() {
    if (!window.ethereum) return null;
    return new ethers.BrowserProvider(window.ethereum);
  }

  async function getSigner() {
    const provider = getProvider();
    if (!provider) throw new Error("Không tìm thấy MetaMask");
    return await provider.getSigner();
  }

  async function checkNetwork() {
    try {
      const provider = getProvider();
      if (!provider) return;
      const net = await provider.getNetwork();
      if (Number(net.chainId) === 11155111) {
        setNetworkOk(true);
      } else {
        setNetworkOk(false);
      }
    } catch (e) {
      console.error(e);
      setNetworkOk(false);
    }
  }

  useEffect(() => {
    checkNetwork();
  }, []);

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        alert("Hãy cài MetaMask trước đã.");
        return;
      }

      const provider = getProvider();
      const accounts = await provider.send("eth_requestAccounts", []);
      const addr = accounts[0];

      setAccount(addr);
      await checkNetwork();
      await loadTokenBalance(addr);
    } catch (err) {
      console.error(err);
      setTxStatus("Lỗi kết nối ví: " + (err?.shortMessage || err.message));
    }
  }

  async function loadTokenBalance(addr) {
    try {
      const provider = getProvider();
      if (!provider) throw new Error("Không tìm thấy MetaMask");

      const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
      const bal = await token.balanceOf(addr);
      setTokenBalance(ethers.formatUnits(bal, 18));
    } catch (err) {
      console.error(err);
      setTxStatus("Lỗi đọc số dư MDT: " + (err?.shortMessage || err.message));
    }
  }

  async function handleTransferToken(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!account) {
      setTxStatus("Hãy kết nối ví trước.");
      return;
    }
    try {
      setTxStatus("Đang gửi giao dịch chuyển MDT...");

      const signer = await getSigner();
      const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);

      const amount = ethers.parseUnits(transferAmount || "0", 18);
      const tx = await token.transfer(transferTo, amount);
      await tx.wait();

      setTxStatus("Chuyển MDT thành công!");
      await loadTokenBalance(account);
    } catch (err) {
      console.error(err);
      setTxStatus("Lỗi giao dịch MDT: " + (err?.shortMessage || err.message));
    }
  }

  async function handleMintNft(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!account) {
      setTxStatus("Hãy kết nối ví trước.");
      return;
    }
    try {
      setTxStatus("Đang gửi giao dịch mint NFT...");

      const signer = await getSigner();
      const nft = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer);

      const tx = await nft.safeMint(account, nftUri || "demo-uri");
      await tx.wait();

      setTxStatus("Mint NFT thành công!");
    } catch (err) {
      console.error(err);
      setTxStatus("Lỗi giao dịch NFT: " + (err?.shortMessage || err.message));
    }
  }

  return (
    <BrowserRouter>
      <div className="layout">
        <NavBar account={account} onConnect={connectWallet} />

        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  account={account}
                  networkOk={networkOk}
                  tokenBalance={tokenBalance}
                  txStatus={txStatus}
                  refreshBalance={loadTokenBalance}
                />
              }
            />
            <Route
              path="/token"
              element={
                <TokenPage
                  transferTo={transferTo}
                  setTransferTo={setTransferTo}
                  transferAmount={transferAmount}
                  setTransferAmount={setTransferAmount}
                  handleTransferToken={handleTransferToken}
                />
              }
            />
            <Route
              path="/nft"
              element={
                <NFTPage nftUri={nftUri} setNftUri={setNftUri} handleMintNft={handleMintNft} />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
  