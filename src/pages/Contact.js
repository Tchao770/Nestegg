import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";

function Contact() {
    const [form, setForm] = useState();
    return (
        <div>
            <PhotoHeading src={contactImg} name="contact-image" />
            <div className="contactPage">
                <div className="formDiv">
                    <h1>Contact Us</h1>
                    <p>Have a question about real estate or your mortgage? Send us an email!</p>
                    <form className="formClass">
                        <label>NAME</label><br />
                        <input placeholder="Enter your name" />
                        <label>EMAIL ADDRESS</label><br />
                        <input placeholder="Enter your email" />
                        <label>MESSAGE</label><br />
                        <textarea rows="10" cols="49" placeholder="Hello, so about my mortgage..." />
                        <button className="contactButton emailSubmit">SUBMIT</button>
                    </form>
                </div>
                <div className="moreInfo">
                    <p>more info</p>
                    <p>more info</p>
                    <p>more info</p>
                    <p>more info</p>
                    <p>more info</p>
                    <p>more info</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;