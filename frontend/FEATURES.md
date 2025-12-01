# DApp Quản lý Tài sản Mã hóa

Giao diện web hiện đại cho phép người dùng quản lý token ERC-20 (MDT) và NFT ERC-721 trên mạng Sepolia.

## ✨ Tính năng

### 🏠 Dashboard
- **Tổng quan tài sản**: Hiển thị địa chỉ ví, số dư ETH, MDT và tổng số NFT
- **Thông tin mạng**: Trạng thái kết nối Sepolia với chỉ báo trực quan
- **Trạng thái giao dịch**: Theo dõi real-time các giao dịch với timestamp và link Etherscan

### 💰 Quản lý Token (MDT)
- **Số dư hiện tại**: Hiển thị rõ ràng số dư MDT
- **Chuyển token**: Form gửi token với validation
- **Lịch sử giao dịch**: Bảng chi tiết với hash, loại, số lượng, địa chỉ nhận, thời gian và link Etherscan
- **Trạng thái real-time**: Spinner và thông báo khi đang gửi giao dịch

### 🎨 Quản lý NFT
- **Mint NFT**: Form nhập metadata URI để mint NFT mới
- **Gallery bộ sưu tập**: Hiển thị NFT dưới dạng cards với ảnh placeholder
- **Chi tiết NFT**: Modal hiển thị đầy đủ tokenId, tokenURI, owner và metadata
- **Link Etherscan**: Xem NFT trên blockchain explorer

### 🔐 Bảo mật
- Private key không bao giờ được nhập vào giao diện
- Mọi giao dịch ký qua MetaMask
- Không lưu trữ dữ liệu nhạy cảm trực tiếp on-chain

## 🎨 Thiết kế

### Theme tối hiện đại
- Font: Inter (Google Fonts)
- Màu chủ đạo: Xanh dương (#3b82f6)
- Nền: Gradient tối với độ tương phản cao
- Cards: Bo góc 12px, shadow tinh tế
- Responsive: Grid auto-fit cho mọi kích thước màn hình

### Components chính
- **NavBar**: Logo, navigation links, network status, connect button với blockies avatar
- **Dashboard**: Stats grid 4 cards, network info, transaction status
- **TokenPage**: Balance display, transfer form, history table
- **NFTPage**: Mint form, NFT gallery grid, detail modal
- **TransactionStatus**: Real-time notifications với màu sắc theo trạng thái

## 🚀 Chạy ứng dụng

```powershell
# Cài đặt dependencies
cd frontend
npm install

# Chạy dev server (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 📋 Yêu cầu
- MetaMask extension
- Kết nối mạng Sepolia Testnet
- ETH Sepolia cho gas fees

## 🔗 Smart Contracts
- **MDT Token (ERC-20)**: `0x5573ccC3fcd4bf8a4Ad4679E8dCBa64553C7e520`
- **MDN NFT (ERC-721)**: `0x20F26627ddD499f13118667Ac2321334e09B98Ba`

## 📱 UX Flow

1. **Kết nối**: Click "Kết nối MetaMask" → Chọn tài khoản → Xác nhận mạng Sepolia
2. **Dashboard**: Xem tổng quan tài sản (ETH, MDT, NFT count)
3. **Chuyển MDT**: Vào trang Token → Nhập địa chỉ + số lượng → Xác nhận MetaMask → Xem trạng thái
4. **Mint NFT**: Vào trang NFT → Nhập metadata URI → Xác nhận MetaMask → NFT xuất hiện trong gallery
5. **Xem chi tiết**: Click NFT card → Modal hiển thị đầy đủ thông tin → Link Etherscan

## 🛠️ Tech Stack
- React 19.2
- Vite 7.2
- Ethers.js 6.15
- React Router 6.14
- CSS Variables (Dark Theme)
