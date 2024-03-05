import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Infobox from "../components/Infobox";

function Dapp() {
  const [gasReductionLevel, setGasReductionLevel] = useState(1);
  const account = useAccount();
  const [addressCreationPurpose, setAddressCreationPurpose] = useState('editableAddress');
  const [walletAddress, setWalletAddress] = useState('');


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
    <div className="bg_dapp">
     <Nav/>
    <div className="main">
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
        <Infobox />
      </div>
    </div>
    </div>
  );
}

export default Dapp;
