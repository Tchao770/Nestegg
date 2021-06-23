import { NavLink } from "react-router-dom";
import logo from "../assets/logonav.png";

function NavMenu() {
    return (
        <div id="Nav-Mobile-Hamburger" onClick={() => myFunction()}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </div>
    );
}

function myFunction() {
    var x = document.getElementById("NavBar-id");
    var y = document.getElementById("Nav-Mobile-Hamburger");
    y.classList.toggle("rotate-icon");
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
                <NavLink to="/">
                    <img src={logo} className="Nav-Home" alt="nav-logo" />
                </NavLink>
                <div className="Link-List">
                    <NavLink
                        exact to="/"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("Home")}>
                        HOME
                    </NavLink>
                    <NavLink to="/mortgage"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("Mortgage")}>
                        MORTGAGE
                    </NavLink>
                    <NavLink to="/realestate"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("RealEstate")}>
                        REAL ESTATE
                    </NavLink>
                    {/* <NavLink to="/about"
                        activeClassName="active"
                        className="Link"
                        onClick={() => mobileView("About")}>
                        ABOUT
                    </NavLink> */}
                    <NavLink to="/contact"
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