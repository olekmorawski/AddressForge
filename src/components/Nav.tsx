import logo from '../../styles/images/logoIcon.png';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const [connectionError, setConnectionError] = useState<string | null>(null);
    const account = useAccount();
    const isLoading = account.status === 'connecting' || account.status === 'reconnecting';
    const navigate = useNavigate();


    const handleConnect = async () => {
      setConnectionError(null);
      try {
        if (connectors.length > 0) {
          await connect({ connector: connectors[0] });
          navigate('/dapp');
        } else {
          setConnectionError('No connectors available');
        }
      } catch (error: any) {
        setConnectionError(error.message);
      }
    };
  
    const handleDisconnect = async () => {
      await disconnect();
      setConnectionError(null);
    };

    return (
      <nav>
      <div className="logo_container">
        <Link to="/">
          <img src={logo} alt="AddressForge Logo" className="logo" />
          <h1 className="title">AddressForge</h1>
          </Link>
          {account.status === 'connected' ? (
          <button className="wallet_btn" onClick={handleDisconnect}>Disconnect</button>
        ) : (
          <button className="wallet_btn" onClick={handleConnect} disabled={isLoading}>
            {isLoading ? 'Connecting...' : 'Connect Wallet'} 
          </button>
        )}
      </div>
      {connectionError && <div>Error: {connectionError}</div>}
    </nav>
    );
  };

export default Nav;
