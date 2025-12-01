export default function TransactionStatus({ notifications }) {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="tx-status-container">
        <p className="tx-empty">Chưa có giao dịch nào.</p>
      </div>
    );
  }

  return (
    <div className="tx-status-container">
      {notifications.map((notif, idx) => (
        <div key={idx} className={`tx-notification ${notif.status}`}>
          <div className="tx-notif-header">
            <span className="tx-notif-status">{notif.statusText}</span>
            <span className="tx-notif-time">{notif.timestamp}</span>
          </div>
          <p className="tx-notif-message">{notif.message}</p>
          {notif.txHash && (
            <a
              href={`https://sepolia.etherscan.io/tx/${notif.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tx-notif-link"
            >
              Xem trên Etherscan →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
