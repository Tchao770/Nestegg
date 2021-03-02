import PhotoHeading from "../components/PhotoHeading";
import aboutImg from "../assets/About.jpg";

function Mortgage() {
    return (
        <div className="PageStyles">
            <PhotoHeading src={aboutImg} name="mortgage-image" />
        </div>
    )
}

export default Mortgage;