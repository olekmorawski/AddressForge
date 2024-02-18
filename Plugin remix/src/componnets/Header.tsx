
import logo from './../images/Logo.png'
import './../styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="AddressForge Logo" className="logo" />
      <h1 className="header-title">AddressForge</h1>
   </header>
  );
}

export default Header;
