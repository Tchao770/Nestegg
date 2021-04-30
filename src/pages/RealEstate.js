import PhotoHeading from "../components/PhotoHeading";
import realestateImg from "../assets/realestate.jpg";
import ArticleDiv from "../components/ArticleDiv";
import { Link } from "react-router-dom";
import "./pageStyles.scss";

const buyParagraph =
    `Finding your own little slice of California living doesn’t have to be daunting. We provide expert guidance to avoid getting stuck in a maze of endless home searches and bidding matches. Navigating the most competitive market in real estate is easier with consistent, personalized service from the beginning to the close of escrow and beyond.`;

const sellParagraph =
    `Selling your home doesn’t have to be stressful. We work with you to tailor a strategy that maximizes your net return and suits your needs. You’ll always be well-informed and aware of every step of the process. Your best interest is always our top priority not just in selling your home for the best price but also taking necessary steps to minimize liability and diligently work with buyers toward a smooth and successful sale.`;

const quote =
    `Your home is your most valuable asset. Whether you’re a first time buyer or a seasoned investor, we work to realize your goals of homeownership.`;

function RealEstate() {
    return (
        <div className="PageStyles">
            <PhotoHeading src={realestateImg} name="real-estate-image" />
            <h2 className="Quote">{quote}</h2>
            <div className="RealEstatePage">
                <ArticleDiv title="BUY" paragraph={buyParagraph} />
                <ArticleDiv title="SELL" paragraph={sellParagraph} />
                <Link to="/Nestegg/contact" className="EstateContactLink">
                    <button className="ContactButton">TALK TO US!</button>
                </Link>
            </div>
        </div>
    )
}

export default RealEstate;