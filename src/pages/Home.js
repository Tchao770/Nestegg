import homeImg from "../assets/Homepagecentered.jpg"
import PhotoHeading from "../components/PhotoHeading";

function Home({ match }) {
	console.log(match);
	return (
		<div className="PageStyles">
			<PhotoHeading src={homeImg} name="homepage-image" />
			<article className="ArticleStyle">
				<h1 className="Quote">Your home starts with you.</h1>
				<div className="HomePage">
					<section className="AboutSection">
						<div className="QuoteLeft">
						<h3><i>Home is more than just where you live.</i></h3>
						<span>
							Home can be a place to thrive, grow and build a lifetime investment. We work to make our clients’ best version of home a reality.
						</span>
						</div>
						<hr />
						<div className="QuoteLeft">
						<h3><i>Expert advice at every step.</i></h3>
						<span>
							Homeownership can be a maze of confusing terminology, processes and requirements that can intimidate even seasoned investors. We untangle the mess and help you make a plan based on your goals.
						</span>
						</div>
						<hr />
						<div className="QuoteLeft">
						<h3><i>Everything is right here.</i></h3>
						<span>
							We handle real estate financing and real estate sales in-house. You don’t have to use both services, but when you do, you have a single point of contact handling everything in your transaction. Either way, you always get personalized service and peace of mind.
						</span>
						</div>
					</section>
				</div>
			</article>
		</div>
	)
};

export default Home;