import logo from '../../styles/components/images/logo adressforge.png';
import { useAccount } from 'wagmi';


interface HeaderProps {
    account: ReturnType<typeof useAccount>; // You might need to adjust this type according to your setup
    isLoading: boolean;
    handleConnect: () => Promise<void>;
    handleDisconnect: () => Promise<void>;
  }

  const Header: React.FC<HeaderProps> = ({ account, isLoading, handleConnect, handleDisconnect }) => {
    return (
      <header className="header">
        <div className="logo_container">
          <img src={logo} alt="Our Logo" className="logo" />
        </div>
        <h1 className="app_title">AddressForge</h1>
        {account.status === 'connected' ? (
          <button className="wallet-button" onClick={handleDisconnect}>Disconnect</button>
        ) : (
          <button className="wallet-button" onClick={handleConnect} disabled={isLoading}>
            Connect wallet
          </button>
        )}
      </header>
    );
  };




export default Header;
