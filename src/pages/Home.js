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
						<span><i>Home is more than just where you live.</i> <br />
						Home can be a place to thrive, grow and build a lifetime investment. We work to make our clients’ best version of home a reality.</span>
					</section>
					<hr/>
					<section className="AboutSection">
						<span><i>Expert advice at every step.</i> <br />
						Homeownership can be a maze of confusing terminology, processes and requirements that can intimidate even seasoned investors. We untangle the mess and help you make a plan based on your goals.</span>
					</section>
					<hr/>
					<section className="AboutSection">
						<span><i>Everything is right here.</i> <br />
						We handle real estate financing and real estate sales in-house. You don’t have to use both services, but when you do, you have a single point of contact handling everything in your transaction. Either way, you always get personalized service and peace of mind.</span>
					</section>
				</div>
			</article>
		</div>
	)
};

export default Home;