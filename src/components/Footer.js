import footerLogo from "../assets/logofootwhite.png";

function Footer() {
    return (
        <footer className="FooterClass">
            <img src={footerLogo} alt="nestegg-logo" />
            <p>
                Nestegg Inc.<br />
                12437 Lewis Street, Suite 206<br />
                Garden Grove, CA 92840<br />
                info@nestegginc.net<br />
            </p>
        </footer>
    );
}
export default Footer;