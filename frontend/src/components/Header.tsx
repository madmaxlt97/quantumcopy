import "../styles/Header.css";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo_on_dark.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="leftside">
            <div className="img-container">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar">
              <Link to="/about">ABOUT</Link>
              <Link to="/team">TEAM</Link>
            </div>
          </div>
          <div className="rightside">
            <button className="login" onClick={() => navigate("/login")}>
              Log In
            </button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
