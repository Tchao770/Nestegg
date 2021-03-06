import { Link } from "react-router-dom";
import homeImg from "../assets/Homepage.jpg"
import PhotoHeading from "../components/PhotoHeading";
import ArticleDiv from "../components/ArticleDiv";

const aboutHeading = `Who we are`;
const aboutParagraph =
    `Home is more than just where you live. Home can be a place to thrive, grow and build a lifetime investment. We work to make our clients’ best version of home a reality.
    `;

const whatWeDo =
    `Expert advice at every step. Homeownership can be a maze of confusing terminology, processes and requirements that can intimidate even seasoned investors. We untangle the mess and help you make a plan based on your goals.

    Everything is right here. We handle real estate financing and real estate sales in-house. You don’t have to use both services, but when you do, you have a single point of contact handling everything in your transaction. Either way, you always get personalized service and peace of mind.
    `;

function Home({ match }) {
    console.log(match);
    return (
        <div className="PageStyles">
            <PhotoHeading src={homeImg} name="homepage-image" />
            <article className="ArticleStyle">
                <h2 className="Quote">Your home starts with you.</h2>
                <div className="HomePage">
                    <section className="AboutSection">
                        <img src={homeImg} alt="who-we-are" style={{ width: "450px", gridArea: "right", justifySelf: "right" }} />
                        <article style={{ gridArea: "left", justifySelf: "left" }}>
                            <ArticleDiv title={aboutHeading} paragraph={aboutParagraph} />
                            <Link to="/Nestegg/about">
                                <button className="ContactButton">ABOUT US</button>
                            </Link>
                        </article>
                    </section>
                    <section className="AboutSection">
                        <img src={homeImg} alt="who-we-are" style={{ width: "450px", gridArea: "left", justifySelf: "left" }} />
                        <article style={{ gridArea: "right", justifySelf: "right" }}>
                            <ArticleDiv title={"What we do"} paragraph={whatWeDo} />
                            <Link to="/Nestegg/realestate">
                                <button className="ContactButton">LEARN MORE</button>
                            </Link>
                        </article>
                    </section>
                </div>
            </article>
        </div>
    )
};

export default Home;