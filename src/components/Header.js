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
            <nav className="navBar">
                <Link to="/Nestegg/home" style={linkStyle}>
                    <img src={logo} alt="nav-logo" />
                </Link>
                <Link to="/Nestegg/mortgage" style={linkStyle}>
                    MORTGAGE
                </Link>
                <Link to="/Nestegg/realestate" style={linkStyle}>
                    REAL ESTATE
                </Link>
                <Link to="/Nestegg/about" style={linkStyle}>
                    ABOUT
                </Link>
                <Link to="/Nestegg/contact">
                    <button className="contactButton">CONTACT US</button>
                </Link>
                <NavMenu />
            </nav>
        </header>
    )
}

function NavMenu() {
    return (
        <IconContext.Provider value={{ size: "3em" }}>
            <div className="nav-mobile">
                <a href="#!"><HiMenu onClick={() => myFunction} /></a>
            </div>
        </IconContext.Provider>
    );
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

export default HeaderComponent;