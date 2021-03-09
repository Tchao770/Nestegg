//import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";
import GoogleMapReact from "../components/Maps"
//import useForm from "../Hooks/UseForm";

function Contact() {
    /*    const {
            data,
            error,
            onChange,
            onSubmit
        } = useForm();*/
    return (
        <div className="PageStyles">
            <PhotoHeading src={contactImg} name="contact-image" />
            <div className="ContactPage">
                <div className="BorderForm">
                    <div className="FormDiv">
                        <h1>Contact Us</h1>
                        <p className="Paragraph">Have a question about real estate or your mortgage? Send us an email!</p>
                        <form className="FormClass">
                            <label>NAME</label><br />
                            <input placeholder="Enter your name" />
                            <label>EMAIL ADDRESS</label><br />
                            <input placeholder="Enter your email" /*value={data.email}*/ />
                            <label>PHONE</label><br />
                            <input placeholder="Enter your phone number" />
                            <label>MESSAGE</label><br />
                            <textarea rows="10" cols="49" placeholder="Hello..." />
                            <button className="ContactButton EmailSubmit">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="MoreInfo">
                    <GoogleMapReact />
                    <p className="ContactDetailsTitle">OUR OFFICE</p>
                    <p className="Paragraph">
                        12437 Lewis Street, Suite 206<br />
                        Garden Grove<br />
                        CA 92840<br />
                    </p>
                    <p className="ContactDetailsTitle">CONTACT</p>
                    <p className="Paragraph">
                        info@nestegginc.net<br />
                        714.907.4381<br />
                    </p>
                </div>
                <div className="DropBox">
                    <button>Dropbox placeholder</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;