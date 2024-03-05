import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function Dapp() {
  const [gasReductionLevel, setGasReductionLevel] = useState(1);
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [addressCreationPurpose, setAddressCreationPurpose] = useState('editableAddress');
  const [walletAddress, setWalletAddress] = useState('');

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
    setConnectionError(null);
  };

  const isLoading = account.status === 'connecting' || account.status === 'reconnecting';

  const increment = () => {
    setGasReductionLevel((prev) => (prev < 20 ? prev + 1 : prev));
  };
  
  const decrement = () => {
    setGasReductionLevel((prev) => (prev > 0 ? prev - 1 : prev));
    
  };

  useEffect(() => {
    if (account.status === 'connected' && account.address) {
      setWalletAddress(account.address);
    } else {
      setWalletAddress('');
    }
  }, [account.status, account.address]); 

  return (
    <div className="main">
      <Nav account={account} isLoading={isLoading} handleConnect={handleConnect} handleDisconnect={handleDisconnect} />
      <div className="form-container">
      <div className="form-box">
        <h2>Choose address creation purpose</h2>
        <div className="radio-group">
          <input type="radio" id="editableAddress" name="addressType" value="editableAddress" onChange={(e) => setAddressCreationPurpose(e.target.value)} defaultChecked />
          <label htmlFor="editableAddress">Editable address</label>
        </div>
        <div className="radio-group">
          <input type="radio" id="gasReduction" name="addressType" value="gasReduction" onChange={(e) => setAddressCreationPurpose(e.target.value)} />
          <label htmlFor="gasReduction">Gas reduction</label>
        </div>
        {addressCreationPurpose !== 'gasReduction' && (
          <>
            <input type="text" placeholder="0x... Enter your desired address" />
            <div className="radio-group">
              <input type="radio" id="prefix" name="editablePart" defaultChecked />
              <label htmlFor="prefix">prefix</label>
            </div>
            <div className="radio-group">
              <input type="radio" id="suffix" name="editablePart" />
              <label htmlFor="suffix">suffix</label>
            </div>
          </>
        )}
        {addressCreationPurpose === 'gasReduction' && (
          <>
            <label htmlFor="gasReduction" className="input-label">Choose level of gas reduction</label>
            <div className="gas-reduction">
              <button className="gas-reduction-btn" onClick={decrement}>-</button>
              <input
                type="text"
                value={gasReductionLevel}
                readOnly
                className="gas-reduction-input"
              />
              <button className="gas-reduction-btn" onClick={increment}>+</button>
            </div>
          </>
        )}
              <input
        type="text"
        value={walletAddress} // Use walletAddress as the value of the input
        onChange={(e) => setWalletAddress(e.target.value)} // Update state on change to allow editing
        placeholder="Enter contract deployer address"
      />
          <div className="infocontainer">
            <div className="inner-div">
            <p>Your address:</p>
            <p>0x0202e02</p>
            </div>
            <div className="inner-div">
            <p>Difficulty:</p>
            <p>000...</p>
        </div>
    </div>
          <button>Forge your address</button>
          <div className="infocontainer">
            <div className="inner-div">
            <p>Recieved CREATE3 salt:</p>
            <p>...</p> 
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

export default Dapp;
