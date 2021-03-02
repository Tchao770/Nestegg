import PhotoHeading from "../components/PhotoHeading";
import realestateImg from "../assets/realestate.jpg";
import ArticleDiv from "../components/ArticleDiv";
import { Link } from "react-router-dom";
import "./pageStyles.scss";

const buyParagraph =
    `We live in the most competitive market for Real Estate. Finding your little slice of California living 
    can sometimes be challenging, but it’s worth it. Our clients get expert guidance and advice to avoid 
    getting stuck in a maze of home searches and bidding matches. Our clients get consistent, personalized 
    service from start to close of escrow and beyond.`;

const sellParagraph =
    `Selling your home doesn’t have to be stressful. We work with you to tailor a strategy that maximizes 
    your net return and suits your needs. You’ll always be well-informed and aware of every step of the 
    process. Your best interest is always our top priority not just in selling your home for the best price 
    but also taking necessary steps to minimize liability and diligently work with buyers toward a smooth 
    and successful sale.`;

const quote =
    `Your home is your most valuable asset. Whether you’re a first time buyer
    or a seasoned investor, we work to realize your goals of homeownership.`;

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