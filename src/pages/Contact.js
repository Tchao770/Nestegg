//import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";
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
                            <label>MESSAGE</label><br />
                            <textarea rows="10" cols="49" placeholder="Hello, so about my mortgage..." />
                            <button className="ContactButton EmailSubmit">SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className="MoreInfo">
                    <p className="ContactDetailsTitle">OUR OFFICE</p>
                    <p className="Paragraph">
                        16168 Beach Blvd., Suite 251<br />
                        Huntington Beach,<br />
                        CA 92647<br />
                    </p>
                    <p className="ContactDetailsTitle">WORKING HOURS</p>
                    <p className="Paragraph">
                        9AM - 3PM, Mon to Fri
                    </p>
                    <p className="ContactDetailsTitle">CONTACT</p>
                    <p className="Paragraph">
                        info@nestegginc.net<br />
                        714.785.6703 Mobile<br />
                        714.907.4390 Fax<br />
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Contact;