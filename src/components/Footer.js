import footerLogo from "../assets/logofoot.png";
import lenderLogo from "../assets/lenderLogo.png";

function Footer() {
    return (
        <footer className="FooterClass">
            <div className="FooterImg">
                <img src={footerLogo} alt="nestegg-logo" />
            </div>
            <p>
                Nestegg Inc. - 12437 Lewis Street, Suite 206, Garden Grove, CA 92840<br />
                info@nestegginc.net - Cal BRE # 01521541 - NMLS # 301815
            </p>
            <div className="FooterImg">
                <img src={lenderLogo} alt="Equal Housing Lender" />
            </div>
        </footer >
    );
}
export default Footer;