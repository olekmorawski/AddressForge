
import logo from './../images/golem_logo.png'
import './../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <span>Powered by</span>
      <a href="https://www.golem.network/" target="_blank" rel="noreferrer">
      <img src={logo} alt="AddressForge Logo" className="logo" />
      </a>
   </div>
  );
}

export default Footer;
