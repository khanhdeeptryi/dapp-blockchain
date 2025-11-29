export default function Dashboard({ account, networkOk, tokenBalance, txStatus, refreshBalance }) {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <section className="card">
        <h3>Thông tin tài khoản</h3>
        <p>Địa chỉ: {account || '-'} </p>
        <p>Network: {networkOk ? '✅ Sepolia' : '⚠️ Không phải Sepolia'}</p>
        <p>Số dư MDT: {tokenBalance}</p>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => refreshBalance && refreshBalance(account)}>Làm mới số dư</button>
        </div>
      </section>

      <section className="card">
        <h3>Trạng thái giao dịch</h3>
        <p>{txStatus || 'Chưa có giao dịch nào.'}</p>
      </section>
    </div>
  );
}
