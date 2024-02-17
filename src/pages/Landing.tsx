import brandingIcon from '../../styles/components/images/branding.png';
import gasReductionIcon from '../../styles/components/images/Gasreduction.png';
import userTrustIcon from '../../styles/components/images/user trust.png';
import logo from '../../styles/components/images/logo adressforge.png';

function Landing() {
    return (
      <div className="app">
        <div className="bg">
        <header className="header">
            <div className="logo_container">
            <img src={logo} alt="Our Logo" className="logo" /></div>
          <h1 className="app_title">AdressForge</h1>
          <button className="wallet-button">Connect wallet</button>
        </header>
        
        <main className="main-content">
          <div className="txt">
            <h2>Create unique contract address<br />on Ethereum</h2>
          <p>Turn random string into customizable<br />address utilizing Golem Network</p>
          </div>
          <div className="btnbox">
            <button className="run-app-button">RUN THE APP</button>
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