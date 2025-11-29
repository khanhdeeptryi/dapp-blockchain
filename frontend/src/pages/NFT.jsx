export default function NFTPage({ nftUri, setNftUri, handleMintNft }) {
  return (
    <div className="page">
      <h1>Mint NFT</h1>

      <section className="card">
        <form onSubmit={handleMintNft}>
          <div style={{ marginBottom: 8 }}>
            <label>Metadata URI:&nbsp;</label>
            <input
              style={{ width: "420px" }}
              value={nftUri}
              onChange={(e) => setNftUri(e.target.value)}
              placeholder="https://... hoặc ipfs://..."
            />
          </div>
          <button type="submit">Mint NFT</button>
        </form>
      </section>
    </div>
  );
}
