import Nav from "../components/Nav";
import FeatureBox from "../components/FeatureBox";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import brandingIcon from "../../styles/images/brandingIcon.png";
import gasReductionIcon from "../../styles/images/gassReductionIcon.png";
import userTrustIcon from "../../styles/images/userTrustIcon.png";

function Home() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const [connectionError, setConnectionError] = useState<string | null>(null);
  let navigate = useNavigate();


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

  const handleCTA = () => {
    navigate("/dapp");
  };

  // Determine the loading state based on the account status
  const isLoading = account.status === 'connecting' || account.status === 'reconnecting';

  // Determine the loading state based on the status
    return (
    <div className="bg">
      <Nav account={account} isLoading={isLoading} handleConnect={handleConnect} handleDisconnect={handleDisconnect}/>
      <main>
        <div className="text">
          <h2>
            Create unique contract address
            <br />
            on Ethereum
          </h2>
          <p>
            Turn random string into customizable
            <br />
            address utilizing CREATE3 on Golem Network
          </p>
        </div>
        <div className="box_btn">
          <button className="run_btn" onClick={handleCTA} disabled={isLoading}>RUN THE APP</button>
        </div>
        <div className="features">
          <FeatureBox
            title="Branding"
            description="Enhance brand recognition by incorporating identifiable patterns or characters, making them more memorable and trustworthy to users."
            srcIcon={brandingIcon}
          />
          <FeatureBox
            title="Gas reduction"
            description="Predictable addresses allow for interactions with contracts before they're deployed, potentially reducing gas costs associated with contract deployment and interaction."
            srcIcon={gasReductionIcon}
          />
          <FeatureBox
            title="User trust"
            description="Enhance user trust by incorporating identifiable patterns or characters, making them more memorable and trustworthy to users."
            srcIcon={userTrustIcon}
          />
        </div>
      </main>
      <footer className="footer">
        Powered by <span>golem</span>
      </footer>
      {connectionError && <div>Error: {connectionError}</div>}
    </div>
    );
  }

export default Home;