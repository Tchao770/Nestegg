import footerLogo from "../assets/logofoot.png";
import lenderLogo from "../assets/lenderLogo.png";
import FacebookLogo from "../assets/SVG/facebook.svg";
import TwitterLogo from "../assets/SVG/twitter.svg";
import InstagramLogo from "../assets/SVG/instagram.svg";

function Footer() {
    return (
        <footer className="FooterClass">
            {/*
            <div className="SitemapList">
                <a>
                    Home
                </a>
                <a>
                    Mortgage
                </a>
                <a>
                    Real Estate
                </a>
                <a>
                    Contact Us
                </a>
            </div>
            */}
            <div className="SocialIcons">
                <a href="https://www.facebook.com/NesteggIncHomes" id="FB" target="_blank">
                    <FacebookLogo />
                </a>
                <a href="https://www.instagram.com/nesteggrealestate/" id="IG" target="_blank">
                    <InstagramLogo />
                </a>
                <a href="https://twitter.com/Nesteggg" id="TW" target="_blank">
                    <TwitterLogo />
                </a>
            </div>
            <div className="FooterAddress">
                <p>
                    Nestegg Inc - 12437 Lewis Street, Suite 206, Garden Grove, CA 92840<br />
                    info@nestegginc.net - Cal BRE # 01521541 - NMLS # 301815
                </p>
            </div>
            <div className="FooterImg">
                <img src={footerLogo} alt="nestegg-logo" />
                <img src={lenderLogo} alt="Equal Housing Lender" />
            </div>
        </footer >
    );
}
export default Footer;