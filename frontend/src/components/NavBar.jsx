import { NavLink } from "react-router-dom";

export default function NavBar({ account, onConnect }) {
  return (
    <header className="navbar">
      <div className="brand">MyDApp</div>

      <nav className="nav-links">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/token" className={({isActive}) => isActive ? 'active' : ''}>MDT</NavLink>
        <NavLink to="/nft" className={({isActive}) => isActive ? 'active' : ''}>NFT</NavLink>
      </nav>

      <div className="nav-actions">
        <button onClick={onConnect}>
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Kết nối ví'}
        </button>
      </div>
    </header>
  );
}
