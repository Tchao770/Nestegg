import { NavLink } from "react-router-dom";
import logo from "../assets/logonav.png";
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi"
import "./componentStyles.scss";

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
    if (x.className === "NavBar") {
        x.className += `Responsive`;
    } else {
        x.className = "NavBar";
    }
}

// Collapse the view on click
const mobileView = (page) => {
    let nav = document.getElementById("NavBar-id");
    if (nav.className === "NavBarResponsive") {
        nav.className = "NavBar";
    }
}

function HeaderComponent() {
    return (
        <header >
            <nav className="NavBar" id="NavBar-id">
                <NavLink to="/Nestegg/">
                    <img src={logo} className="Nav-Home" alt="nav-logo" />
                </NavLink>
                <div className="Link-List">
                    <NavLink
                        exact to="/Nestegg/"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("Home")}>
                        HOME
                    </NavLink>
                    <NavLink to="/Nestegg/mortgage"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("Mortgage")}>
                        MORTGAGE
                    </NavLink>
                    <NavLink to="/Nestegg/realestate"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("RealEstate")}>
                        REAL ESTATE
                    </NavLink>
                    <NavLink to="/Nestegg/about"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("About")}>
                        ABOUT
                    </NavLink>
                    <NavLink to="/Nestegg/contact"
                        id="Contact"
                        className="Link"
                        onClick={() => mobileView("Contact")}>
                        <button className="ContactButton" onClick={() => mobileView("Contact")}>CONTACT US</button>
                    </NavLink>
                </div>
                <NavMenu />
            </nav>
        </header>
    )
}

export default HeaderComponent;