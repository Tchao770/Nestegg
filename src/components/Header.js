import { Link } from "react-router-dom";
import logo from "../assets/logonav.png";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi"
import "./componentStyles.scss";

const linkStyle = {
    textDecoration: "none",
    color: "black",
}

function HeaderComponent() {

    return (
        <header >
            <nav className="NavBar" id="NavBar-id">
                <Link to="/Nestegg/" style={linkStyle}>
                    <img src={logo} alt="nav-logo" />
                </Link>
                <Link to="/Nestegg/mortgage" className="Links" style={linkStyle}>
                    MORTGAGE
                </Link>
                <Link to="/Nestegg/realestate" className="Links" style={linkStyle}>
                    REAL ESTATE
                </Link>
                <Link to="/Nestegg/about" className="Links" style={linkStyle}>
                    ABOUT
                </Link>
                <Link to="/Nestegg/contact">
                    <button className="ContactButton Links">CONTACT US</button>
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
                <HiMenu className="Nav-Mobile" onClick={() => myFunction()} />
            </div>
        </IconContext.Provider>
    );
}

function myFunction() {
    var x = document.getElementById("NavBar-id");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

export default HeaderComponent;