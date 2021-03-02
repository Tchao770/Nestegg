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
                    <img src={logo} className="Nav-Home" alt="nav-logo" />
                </Link>
                <div className="Link-List">
                    <Link to="/Nestegg/mortgage" className="Link" style={linkStyle}>
                        MORTGAGE
                </Link>
                    <Link to="/Nestegg/realestate" className="Link" style={linkStyle}>
                        REAL ESTATE
                </Link>
                    <Link to="/Nestegg/about" className="Link" style={linkStyle}>
                        ABOUT
                </Link>
                    <Link to="/Nestegg/contact">
                        <button className="ContactButton Link">CONTACT US</button>
                    </Link>
                </div>
                <NavMenu />
            </nav>
        </header>
    )
}

function NavMenu() {
    return (
        <IconContext.Provider value={{ size: "3em", color: "black" }}>
            <div className="icon Nav-Mobile-Header">
                <HiMenu className="Nav-Mobile" onClick={() => myFunction()} />
            </div>
        </IconContext.Provider>
    );
}

function myFunction() {
    var x = document.getElementById("NavBar-id");
    var y = document.getElementsByClassName("Links");
    if (x.className === "NavBar") {
        x.className += `Responsive`;
    } else {
        x.className = "NavBar";
    }
    console.log(y);
}

export default HeaderComponent;