import PhotoHeading from "../components/PhotoHeading";
import aboutImg from "../assets/About.jpg";
import profileImg from "../assets/profile-silhouette.jpg";

const aboutParagraph =
    `Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis 
    faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras 
    ullamcorper gravida tellus ut consequat.`

function About() {
    return (
        <div className="PageStyles">
            <PhotoHeading src={aboutImg} name="mortgage-image" />
            <div className="AboutPage">
                <h2 className="Quote">Meet the team!</h2>
                <p>{aboutParagraph}</p>
                <div className="Pictures">
                    <div className="Profile">
                        <img src={profileImg} alt="Agent1"/>
                        <h3>Sammy</h3>
                    </div>
                    <div className="Profile">
                        <img src={profileImg} alt="Agent2"/>
                        <h3>Eman</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;