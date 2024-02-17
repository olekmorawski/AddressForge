import logo from '../../styles/components/images/logo adressforge.png';

const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="logo_container">
    <img src={logo} alt="Our Logo" className="logo" /></div>
  <h1 className="app_title">AdressForge</h1>
  {account.status === 'connected' ? (
  <button className="wallet-button" onClick={handleDisconnect}>Disconnect</button>
) : (
  <button className="wallet-button" onClick={handleConnect} disabled={isLoading}>
    Connect wallet
  </button>
)}
</header>
  );

  const handleDisconnect = async () => {
// Reset any previous error
  }; 

};




export default Header;
