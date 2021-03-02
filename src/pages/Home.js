import { Link } from "react-router-dom";
import homeImg from "../assets/Homepage.jpg"
import PhotoHeading from "../components/PhotoHeading";
import ArticleDiv from "../components/ArticleDiv";

const aboutHeading = `Who we are`;
const aboutParagraph =
    `Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis
    feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat.
    Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.`;

function Home() {

    return (
        <div className="PageStyles">
            <PhotoHeading src={homeImg} name="homepage-image" />
            <article className="ArticleStyle">
                <h2 className="Quote">Your home starts with you.</h2>
                <div className="HomePage">
                    <article className="AboutArticle">
                        <ArticleDiv title={aboutHeading} paragraph={aboutParagraph} />
                        <Link to="/Nestegg/about">
                            <button className="ContactButton">LEARN MORE</button>
                        </Link>
                    </article>
                    <img src={homeImg} alt="who-we-are" style={{ width: "450px" }} />
                </div>
            </article>
        </div>
    )
};

export default Home;