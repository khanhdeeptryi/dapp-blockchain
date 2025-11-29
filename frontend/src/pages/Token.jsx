export default function TokenPage({ transferTo, setTransferTo, transferAmount, setTransferAmount, handleTransferToken }) {
  return (
    <div className="page">
      <h1>MDT — Chuyển token</h1>

      <section className="card">
        <form onSubmit={handleTransferToken}>
          <div style={{ marginBottom: 8 }}>
            <label>Đến địa chỉ:&nbsp;</label>
            <input
              style={{ width: "420px" }}
              value={transferTo}
              onChange={(e) => setTransferTo(e.target.value)}
              placeholder="0x..."
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label>Số lượng MDT:&nbsp;</label>
            <input
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="10"
            />
          </div>
          <button type="submit">Gửi giao dịch</button>
        </form>
      </section>
    </div>
  );
}
