import PhotoHeading from "../components/PhotoHeading";
import realestateImg from "../assets/realestate.jpg";
import ArticleDiv from "../components/ArticleDiv";
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
    and successful sale.`

function RealEstate() {
    return (
        <div>
            <PhotoHeading src={realestateImg} name="real-estate-image" />

            <h1>Your home is your most valuable asset. Whether you’re a first time buyer
            or a seasoned investor, we work to realize your goals of homeownership.</h1>
            <ArticleDiv title="BUY" paragraph={buyParagraph} />
            <ArticleDiv title="SELL" paragraph={sellParagraph}/>
            <h1>Talk to us!</h1>
        </div>
    )
}

export default RealEstate;