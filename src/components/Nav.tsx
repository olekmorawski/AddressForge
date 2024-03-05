import logo from '../../styles/images/logoIcon.png';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';

interface NavProps {
  account: ReturnType<typeof useAccount>;
  isLoading: boolean;
  handleConnect: () => Promise<void>;
  handleDisconnect: () => Promise<void>;
}

  const Nav = ({ account, isLoading, handleConnect, handleDisconnect } : NavProps) => {
    return (
      <nav>
      <div className="logo_container">
        <Link to="/">
          <img src={logo} alt="AddressForge Logo" className="logo" />
          <h1 className="title">AddressForge</h1>
          </Link>
        {account.status === 'connected' ? (
        <button className="wallet_btn" onClick={handleDisconnect}>Disconnecct</button>
        ) : (
          <button className="wallet_btn" onClick={handleConnect} disabled={isLoading}>Connect Wallet</button>
        )}
      </div>
    </nav>
    );
  };




export default Nav;
