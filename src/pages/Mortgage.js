import PhotoHeading from "../components/PhotoHeading";
import mortgageImg from "../assets/Mortgagecentered.jpg";

function MortgageCalculator() {
    return (
        <div className="Calculator">
            <iframe src="https://www.mortgagecalculator.net/embeddable/v2/?size=1&textColor=000000&backgroundColor=ffffff"
                style={{ width: "100%", frameborder: "0", scrolling: "no", height: "330px" }} />
            <a target="_blank" href="https://www.mortgagecalculator.net">
                Powered By www.MortgageCalculator.net
            </a>
        </div>
    );
}

function Mortgage() {
    return (
        <div className="PageStyles">
            <PhotoHeading src={mortgageImg} name="mortgage-image" />
            <div className="MortgagePage">
                <h2 className="Quote">Use this mortgage calculator to get an idea!</h2>
                <MortgageCalculator />
            </div>
        </div >
    )
}

export default Mortgage;