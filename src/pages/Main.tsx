import { useAccount, useConnect, useDisconnect } from "wagmi";
import logo from '../../styles/components/images/logo adressforge.png';
import { useState } from "react";

function Main() {
    const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const [connectionError, setConnectionError] = useState<string | null>(null)

  const handleConnect = async () => {
    setConnectionError(null);
    try {
      if (connectors.length > 0) {
        await connect({ connector: connectors[0] });
      } else {
        setConnectionError('No connectors available');
      }
    } catch (error: any) {
      setConnectionError(error.message);
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    setConnectionError(null); // Reset any previous error
  };

  const isLoading = account.status === 'connecting' || account.status === 'reconnecting';

  return (
    
    <div className="main">
      <header className="header1">
        <div className="logo_container1">
          <img src={logo} alt="Our Logo" className="logo" />
        </div>
        <h1 className="app_title1">AddressForge</h1>
        {account.status === 'connected' ? (
          <button className="wallet-button1" onClick={handleDisconnect}>Disconnect</button>
        ) : (
          <button className="wallet-button1" onClick={handleConnect} disabled={isLoading}>
            Connect wallet
          </button>
        )}
      </header>
      <div className="form-container">
        <div className="form-box">
          <h2>Choose address creation purpose</h2>
          <div className="radio-group">
            <input type="radio" id="editableAddress" name="addressType" defaultChecked />
            <label htmlFor="editableAddress">Editable address</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="gasReduction" name="addressType" />
            <label htmlFor="gasReduction">Gas reduction</label>
          </div>
          <input type="text" placeholder="0x... Enter your desired address" />
          <div className="radio-group">
            <input type="radio" id="prefix" name="editablePart" defaultChecked />
            <label htmlFor="prefix">prefix</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="suffix" name="editablePart" />
            <label htmlFor="suffix">suffix</label>
          </div>
          <input type="text" placeholder="Enter contract deployer address" />
          <div className="infocontainer">
            <div className="inner-div">
            <p>Your address:</p>
            <p>0x0202e02</p>
            </div>
            <div className="inner-div">
            <p>Estimated gas:</p>
            <p>000...</p>
        </div>
    </div>
          <button>Forge your address</button>
          <div className="infocontainer">
            <div className="inner-div">
            <p>Recieved Salt</p>
            <p>0x0202e02</p> 
            </div>
          </div>
        </div>
        <div className="info-box">
          <p>Please note that the string address always starts with 0x. The rest of address contains 40 characters (20 bytes). You can edit maximum 20 characters in address.</p>
          <p>String have to be written in hex: 0-9, A-F, a-f. Letters can be written in uppercase or lowercase.</p>
          <p>Gas reduction is the amount of the zeros in the prefix.</p>
          <p>The more changes in the address, the more computational power will be required, therefore increasing gas price.</p>
          <p>The gas will be charged from your connected wallet.</p>
        </div>
      </div>
      {connectionError && <div>Error: {connectionError}</div>}
    </div>
  );
}

export default Main;
