import { Link } from "react-router-dom";
import logo from "../assets/logonav.png";
import "./styles.scss";

const linkStyle = {
    textDecoration: "none",
    color: "black",
}

function HeaderComponent() {
    return (
        <header >
            <nav className="navBar">
                <Link to="/" style={linkStyle}>
                    <img src={logo} alt="nav-logo" />
                </Link>
                <Link to="/mortgage" style={linkStyle}>
                    MORTGAGE
                </Link>
                <Link to="/realestate" style={linkStyle}>
                    REAL ESTATE
                </Link>
                <Link to="/about" style={linkStyle}>
                    ABOUT
                </Link>
                <Link to="/contact">
                    <button className="contactButton">CONTACT US</button>
                </Link>
            </nav>
        </header>
    )
}

export default HeaderComponent;