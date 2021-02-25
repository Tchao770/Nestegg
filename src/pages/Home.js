import homeImg from "../assets/Homepage.jpg"
import PhotoHeading from "../components/PhotoHeading";
function Home() {
    return (
        <div>
            <PhotoHeading src={homeImg} name="homepage-image" />
            <article className="articleStyle">
                <h1>Build your home empire today</h1>
            </article>
        </div>
    )
};

export default Home;