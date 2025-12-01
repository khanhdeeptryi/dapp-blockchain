import TransactionStatus from "../components/TransactionStatus";

export default function Dashboard({ account, networkOk, ethBalance, tokenBalance, nftCount, txNotifications, refreshBalance }) {
  return (
    <div className="page">
      <h1>Dashboard — Tổng quan tài sản</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Địa chỉ ví</div>
          <div className="stat-value address">{account ? `${account.slice(0, 10)}...${account.slice(-8)}` : '—'}</div>
        </div>

        <div className="stat-card highlight">
          <div className="stat-label">Số dư ETH</div>
          <div className="stat-value">{parseFloat(ethBalance).toFixed(4)} ETH</div>
        </div>

        <div className="stat-card highlight">
          <div className="stat-label">Số dư MDT</div>
          <div className="stat-value">{parseFloat(tokenBalance).toFixed(2)} MDT</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Tổng số NFT</div>
          <div className="stat-value">{nftCount}</div>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3>Thông tin mạng</h3>
        </div>
        <div className="card-body">
          <p>
            <strong>Network:</strong>{' '}
            {networkOk ? (
              <span className="badge success">✓ Sepolia Testnet</span>
            ) : (
              <span className="badge warning">⚠ Không phải Sepolia</span>
            )}
          </p>
          <p className="text-muted">
            Hãy đảm bảo MetaMask đang kết nối với mạng Sepolia để thực hiện giao dịch.
          </p>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h3>Trạng thái giao dịch</h3>
          <button onClick={refreshBalance} className="btn-secondary">Làm mới</button>
        </div>
        <div className="card-body">
          <TransactionStatus notifications={txNotifications} />
        </div>
      </section>
    </div>
  );
}
