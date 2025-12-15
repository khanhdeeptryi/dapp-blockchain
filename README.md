# 🏢 TokProp DApp - Quản Lý Tài Sản Blockchain

Ứng dụng phi tập trung (DApp) toàn diện cho quản lý tài sản số với NFT, token economy và marketplace. Được xây dựng trên Ethereum với giao diện hiện đại và tích hợp IPFS.

## 📋 Tổng Quan

**TokProp** là một hệ sinh thái DApp hoàn chỉnh bao gồm:

- **ERC-20 Token (MDT)**: Token quản trị với 1,000,000 initial supply
- **ERC-721 NFT (MDNFT)**: NFT đại diện cho tài sản với metadata IPFS
- **NFT Marketplace**: Mua bán NFT với MDT token
- **Asset Management**: Upload, mã hóa, và quản lý tài sản
- **IPFS Integration**: Lưu trữ metadata phi tập trung với Pinata

## 🏗️ Kiến Trúc

```
my-dapp-contracts/
├── contracts/              # Smart contracts Solidity
│   ├── MyDAppToken.sol    # ERC-20 Token
│   └── MyDAppNFT.sol      # ERC-721 NFT
├── frontend/              # React + Vite frontend
│   └── src/
│       ├── pages/         # Dashboard, Marketplace, Assets
│       ├── components/    # NavBar, NFTCard, Modal
│       └── utils/         # Encryption, IPFS, formatting
├── scripts/               # Deployment scripts
└── artifacts/             # Compiled contracts & ABIs
```

## ✨ Tính Năng Chính

### 1. Token Economy (MDT)
- ✅ Chuyển token giữa các địa chỉ
- ✅ Xem lịch sử giao dịch
- ✅ Hiển thị balance realtime

### 2. NFT Management
- ✅ Mint NFT từ tài sản
- ✅ Upload hình ảnh lên IPFS
- ✅ Metadata encryption (AES-256-GCM)
- ✅ Gallery view với filter

### 3. NFT Marketplace
- ✅ Liệt kê NFT để bán
- ✅ Mua NFT bằng MDT token
- ✅ Hủy listing
- ✅ Auto-detect NFT transfers

### 4. IPFS Integration
- ✅ Upload files qua Pinata API
- ✅ Multi-gateway fallback
- ✅ Encrypted metadata storage

## 🚀 Cài Đặt

### Prerequisites

- **Node.js** v18+ và npm
- **MetaMask** browser extension
- **Sepolia testnet ETH** cho gas fees
- **Pinata Account** (cho IPFS)

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd my-dapp-contracts
```

### 2. Install Dependencies

```bash
# Install smart contract dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Cấu Hình Environment

Tạo file `.env` trong thư mục `frontend/`:

```env
VITE_PINATA_JWT=your_pinata_jwt_token
VITE_PINATA_GATEWAY=your_gateway_url
```

### 4. Compile Contracts (Optional)

Nếu muốn compile lại contracts:

```bash
npx hardhat compile
```

### 5. Deploy Contracts (Optional)

Contracts đã được deploy trên Sepolia testnet:
- **MyDAppToken**: `0x5573ccC3fcd4bf8a4Ad4679E8dCBa64553C7e520`
- **MyDAppNFT**: `0x20F26627ddD499f13118667Ac2321334e09B98Ba`

Nếu muốn deploy mới:

```bash
npx hardhat run scripts/deploy.mjs --network sepolia
```

### 6. Chạy Development Server

```bash
cd frontend
npm run dev
```

App sẽ chạy tại: **http://localhost:5174**

## 🔧 Cấu Hình MetaMask

1. Thêm **Sepolia Testnet** vào MetaMask
2. Get testnet ETH từ [Sepolia Faucet](https://sepoliafaucet.com/)
3. Connect wallet trong app
4. Import MDT token contract: `0x5573ccC3fcd4bf8a4Ad4679E8dCBa64553C7e520`

## 📚 Stack Công Nghệ

### Smart Contracts
- **Solidity** ^0.8.20
- **OpenZeppelin Contracts** 5.x
- **Hardhat** - Development framework

### Frontend
- **React** 19.2
- **Vite** 7.2 - Build tool
- **ethers.js** 6.15 - Web3 library
- **React Router** 6.14 - Navigation

### Storage & Encryption
- **Pinata** - IPFS pinning service
- **Web Crypto API** - Client-side encryption
- **localStorage** - Demo marketplace data

## 📖 Sử Dụng

### Mint NFT Từ Tài Sản

1. Vào **Asset Management**
2. Nhập thông tin tài sản (tên, mô tả, giá trị)
3. Upload hình ảnh
4. Chọn "Encrypt Metadata" (optional)
5. Click **Mint NFT**

### Bán NFT Trên Marketplace

1. Vào **NFT Marketplace**
2. Click "List for Sale" trên NFT của bạn
3. Nhập giá bằng MDT
4. Confirm transaction
5. Sau khi sold, transfer NFT cho buyer

### Mua NFT

1. Browse marketplace
2. Click "Buy Now" trên NFT
3. Approve MDT spending
4. Confirm purchase transaction
5. Đợi seller transfer NFT

## 🔐 Bảo Mật

- ✅ Client-side encryption cho metadata nhạy cảm
- ✅ Private keys không bao giờ rời MetaMask
- ✅ Smart contracts ownable với access control
- ✅ IPFS content addressing (immutable)

## 🧪 Testing

```bash
# Run contract tests
npx hardhat test

# Run with gas report
REPORT_GAS=true npx hardhat test

# Run specific test
npx hardhat test test/Lock.js
```

## 📦 Build Production

```bash
cd frontend
npm run build
```

Production build sẽ ở trong `frontend/dist/`


## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Sepolia Etherscan](https://sepolia.etherscan.io/)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [Pinata IPFS](https://www.pinata.cloud/)
- [Hardhat Documentation](https://hardhat.org/)
