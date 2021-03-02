import PhotoHeading from "../components/PhotoHeading";
import mortgageImg from "../assets/Mortgage.jpg";

function Mortgage() {
    return (
        <div  className="PageStyles">
            <PhotoHeading src={mortgageImg} name="mortgage-image" />
        </div>
    )
}

export default Mortgage;