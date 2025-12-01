import { useState } from "react";

export default function TokenPage({ transferTo, setTransferTo, transferAmount, setTransferAmount, handleTransferToken, tokenHistory, tokenBalance }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleTransferToken(e);
    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Quản lý Token MDT</h1>

      <section className="card">
        <div className="card-header">
          <h3>Số dư hiện tại</h3>
        </div>
        <div className="card-body">
          <div className="balance-display">
            <span className="balance-value">{parseFloat(tokenBalance).toFixed(2)}</span>
            <span className="balance-label">MDT</span>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h3>Chuyển Token</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label>Đến địa chỉ</label>
              <input
                type="text"
                className="form-input"
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
                placeholder="0x..."
                required
              />
            </div>
            <div className="form-group">
              <label>Số lượng MDT</label>
              <input
                type="number"
                className="form-input"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="10.0"
                step="0.01"
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? '⏳ Đang gửi...' : '📤 Gửi giao dịch'}
            </button>
          </form>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h3>Lịch sử giao dịch</h3>
        </div>
        <div className="card-body">
          {tokenHistory.length === 0 ? (
            <p className="text-muted">Chưa có giao dịch nào.</p>
          ) : (
            <div className="table-container">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Hash</th>
                    <th>Loại</th>
                    <th>Số lượng</th>
                    <th>Đến</th>
                    <th>Thời gian</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenHistory.map((tx, idx) => (
                    <tr key={idx}>
                      <td className="hash">{tx.hash.slice(0, 10)}...</td>
                      <td><span className="badge">{tx.type}</span></td>
                      <td>{tx.amount} MDT</td>
                      <td className="address">{tx.to.slice(0, 8)}...{tx.to.slice(-6)}</td>
                      <td className="time">{tx.timestamp}</td>
                      <td>
                        <a
                          href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-external"
                        >
                          Etherscan →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
