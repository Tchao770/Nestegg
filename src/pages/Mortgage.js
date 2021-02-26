import PhotoHeading from "../components/PhotoHeading";
import mortgageImg from "../assets/Mortgage.jpg";

function Mortgage() {
    return (
        <div style={{ paddingBottom: "2.5rem" }}>
            <PhotoHeading src={mortgageImg} name="mortgage-image" />
        </div>
    )
}

export default Mortgage;