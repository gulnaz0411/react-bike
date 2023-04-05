import { Link } from "react-router-dom";
function Header () {
    return (
        <>
        <nav className="header" >
          <ul>
          <li><Link to="/">Main</Link></li>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/theft report">Theft report</Link></li>
          </ul>
          <a className="logo">
            <img width={50} height={50}  src="./img/logo.jpg" alt="Bike" />
          </a>  
        </nav>
        </>
    )
}
export default Header;
