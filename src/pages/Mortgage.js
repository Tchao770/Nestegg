import PhotoHeading from "../components/PhotoHeading";
import mortgageImg from "../assets/Mortgagecentered.jpg";
import useWindowSize from "../hooks/UseWindowSize";


function MortgageCalculator() {
    const currentWindow = useWindowSize();
    return (
        <div className="Calculator">
            <iframe src={`https://www.mortgagecalculator.net/embeddable/v2/?size=${currentWindow.size}&textColor=000000&backgroundColor=ffffff`}
                title="Mortgage-Calculator"
                style={{
                    width: currentWindow.width, frameborder: "0", scrolling: "no", height: "330px"
                }} />
        </div>
    );
}

function Mortgage() {
    return (
        <div className="PageStyles">
            <PhotoHeading src={mortgageImg} name="mortgage-image" />
            <div className="MortgagePage">
                <h2 className="Quote">There’s more to a mortgage broker than just great rates.</h2>
                <section>
                    <p>We believe that customer service and communication matter. Whether you’re an existing homeowner refinancing to get a lower payment or you’re a first time buyer, we keep you in the loop.</p>
                    <br />
                    <p>We go above and beyond. Working for you isn’t only about making sure that mortgage transactions happen smoothly. We also strive to educate and inform our clients – so that you can make the best decision based on the best available information.</p>
                    <br />
                    <p>Talk to us about getting a mortgage or use the calculator below to estimate your own savings!</p>
                </section>
                <MortgageCalculator />
            </div>
        </div >
    )
}

export default Mortgage;