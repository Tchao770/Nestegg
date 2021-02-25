import PhotoHeading from "../components/PhotoHeading";
import aboutImg from "../assets/About.jpg";

function Mortgage() {
    return (
        <div style={{ paddingBottom: "2.5rem" }}>
            <PhotoHeading src={aboutImg} name="mortgage-image" />
        </div>
    )
}

export default Mortgage;