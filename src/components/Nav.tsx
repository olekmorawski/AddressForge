import logo from '../../styles/images/logoIcon.png';
import { useAccount } from 'wagmi';

interface NavProp {
  account: ReturnType<typeof useAccount>;
  isLoading: boolean;
  handleConnect: () => Promise<void>;
  handleDisconnect: () => Promise<void>;
}

  const Nav: React.FC<NavProp> = ({ account, isLoading, handleConnect, handleDisconnect }) => {
    return (
      <nav>
      <div className="logo_container">
        <a href="">
          <img src={logo} alt="AddressForge Logo" className="logo" />
          <h1 className="title">AddressForge</h1>
        </a>
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
