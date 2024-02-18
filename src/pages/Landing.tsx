import Header from '../components/Header';
import { useState } from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import brandingIcon from '../../styles/components/images/branding.png';
import gasReductionIcon from '../../styles/components/images/Gasreduction.png';
import userTrustIcon from '../../styles/components/images/user trust.png';

function Landing() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const [connectionError, setConnectionError] = useState<string | null>(null);

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

  // Determine the loading state based on the account status
  const isLoading = account.status === 'connecting' || account.status === 'reconnecting';

  // Determine the loading state based on the status
    return (
      <div className="app">
        <div className="bg">
           <Header
            account={account}
            isLoading={isLoading}
            handleConnect={handleConnect}
            handleDisconnect={handleDisconnect}
          />

        <main className="main-content">
          <div className="txt">
            <h2>Create unique contract address<br />on Ethereum</h2>
          <p>Turn random string into customizable<br />address utilizing CREATE3 on Golem Network</p>
          </div>
          <div className="btnbox">
            <button className="run-app-button" onClick={handleConnect} disabled={isLoading}>RUN THE APP</button>
          </div>
          <div className="features">
            <FeatureBox 
              title="Branding"
              description="Enhance brand recognition by incorporating identifiable patterns or characters, making them more memorable and trustworthy to users."
              iconUrl={brandingIcon}
              />
            <FeatureBox 
              title="Gas reduction"
              description="Predictable addresses allow for interactions with contracts before they're deployed, potentially reducing gas costs associated with contract deployment and interaction."
              iconUrl={gasReductionIcon}
              />
            <FeatureBox 
              title="User trust"
              description="Enhance user trust by incorporating identifiable patterns or characters, making them more memorable and trustworthy to users."
              iconUrl={userTrustIcon}
              />
          </div>
        </main>
        
        <footer className="footer">
          Powered by <span>golem</span>
        </footer>
        </div>
        {connectionError && <div>Error: {connectionError}</div>}
      </div>
    );
  }
  
  function FeatureBox({ title, description, iconUrl }: { title: string, description: string, iconUrl: string }) {
    return (
      <div className="feature-box">
        <div className="feature-icon">
          <img src={iconUrl} alt={`${title} icon`} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

export default Landing;