import { useState } from "react";

export default function NFTPage({ nftUri, setNftUri, handleMintNft, nftList }) {
  const [loading, setLoading] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleMintNft(e);
    setLoading(false);
  };

  return (
    <div className="page">
      <h1>Quản lý NFT Tài sản</h1>

      <section className="card">
        <div className="card-header">
          <h3>Mint NFT mới</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit} className="form">
            <div className="form-group">
              <label>Metadata URI</label>
              <input
                type="text"
                className="form-input"
                value={nftUri}
                onChange={(e) => setNftUri(e.target.value)}
                placeholder="https://... hoặc ipfs://..."
                required
              />
              <small className="form-help">
                Nhập URL metadata JSON hoặc IPFS URI cho NFT của bạn
              </small>
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? '⏳ Đang mint...' : '🎨 Mint NFT'}
            </button>
          </form>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h3>Bộ sưu tập NFT của bạn</h3>
          <span className="badge">{nftList.length} NFTs</span>
        </div>
        <div className="card-body">
          {nftList.length === 0 ? (
            <p className="text-muted">Bạn chưa sở hữu NFT nào. Hãy mint NFT đầu tiên!</p>
          ) : (
            <div className="nft-gallery">
              {nftList.map((nft, idx) => (
                <div key={idx} className="nft-card" onClick={() => setSelectedNFT(nft)}>
                  <div className="nft-image">
                    <div className="nft-placeholder">🖼️</div>
                  </div>
                  <div className="nft-info">
                    <h4 className="nft-title">NFT #{nft.tokenId}</h4>
                    <p className="nft-uri">{nft.tokenURI.slice(0, 30)}...</p>
                    <div className="nft-actions">
                      <button className="btn-small" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNFT(nft);
                      }}>
                        Xem chi tiết
                      </button>
                      <a
                        href={`https://sepolia.etherscan.io/token/${nft.tokenId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-small"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Etherscan →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedNFT && (
        <div className="modal-overlay" onClick={() => setSelectedNFT(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Chi tiết NFT #{selectedNFT.tokenId}</h3>
              <button className="modal-close" onClick={() => setSelectedNFT(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">Token ID:</span>
                <span className="detail-value">{selectedNFT.tokenId}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Owner:</span>
                <span className="detail-value address">{selectedNFT.owner}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Token URI:</span>
                <span className="detail-value">{selectedNFT.tokenURI}</span>
              </div>
              <div className="modal-actions">
                <a
                  href={selectedNFT.tokenURI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Xem Metadata →
                </a>
                <a
                  href={`https://sepolia.etherscan.io/token/${selectedNFT.tokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Xem trên Etherscan →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
