import { Link } from "react-router-dom";
import logo from "../assets/logonav.png";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi"
import "./styles.scss";

const linkStyle = {
    textDecoration: "none",
    color: "black",
}

function HeaderComponent() {

    return (
        <header >
            <nav className="navBar" id="NavBar">
                <Link to="/Nestegg/" style={linkStyle}>
                    <img src={logo} alt="nav-logo" />
                </Link>
                <Link to="/Nestegg/mortgage" className="links" style={linkStyle}>
                    MORTGAGE
                </Link>
                <Link to="/Nestegg/realestate" className="links" style={linkStyle}>
                    REAL ESTATE
                </Link>
                <Link to="/Nestegg/about" className="links" style={linkStyle}>
                    ABOUT
                </Link>
                <Link to="/Nestegg/contact">
                    <button className="contactButton links">CONTACT US</button>
                </Link>
                <NavMenu />
            </nav>
        </header>
    )
}

function NavMenu() {
    return (
        <IconContext.Provider value={{ size: "3em", color: "black" }}>
            <div className="icon">
                <HiMenu className="nav-mobile" onClick={() => myFunction()} />
            </div>
        </IconContext.Provider>
    );
}

function myFunction() {
    var x = document.getElementById("NavBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

export default HeaderComponent;