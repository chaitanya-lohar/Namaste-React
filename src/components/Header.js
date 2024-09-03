import logo from "../../Images/logo1.png"


const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };



  export default Header;