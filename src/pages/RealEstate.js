import PhotoHeading from "../components/PhotoHeading";
import realestateImg from "../assets/realestate.jpg";

function RealEstate() {
    return (
    <div>
        <PhotoHeading src={realestateImg} name="real-estate-image" />
        
        <h1>Your home is your most valuable asset. Whether you’re a first time buyer 
            or a seasoned investor, we work to realize your goals of homeownership.</h1>
    </div>)
}

export default RealEstate;