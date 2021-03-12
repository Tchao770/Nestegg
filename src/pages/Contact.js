//import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";
import GoogleMapReact from "../components/Maps"
import { useForm } from "../Hooks/UseForm";

function Contact() {
    const {
        data,
        error,
        handleChange,
        handleSubmit
    } = useForm({
        validations: {
            name: {
                pattern: {
                    value: '',
                    errorMessage:
                        "Your name cannot contain numbers or special characters!",
                },
            },
            email: {
                pattern: {
                    value: '',
                    errorMessage:
                        "",
                },
            },
            phone: {
                pattern: {
                    value: '',
                    errorMessage:
                        "",
                },
            },
        },
        onSubmit: () => alert('Message Sent!'),
        initialValues:{
            "name": '',
            "email": '',
            "number": '',
            "message": '',
        }
    });

    return (
        <div className="PageStyles">
            <PhotoHeading src={contactImg} name="contact-image" />
            <div className="ContactPage">
                <div className="BorderForm">
                    <div className="FormDiv">
                        <h1>Contact Us</h1>
                        <p className="Paragraph">Have a question about real estate or your mortgage? Send us an email!</p>
                        <form className="FormClass" onSubmit={handleSubmit}>
                            <label>NAME</label><br />
                            <input
                                placeholder="Enter your name"
                                /*value={data.email || ''}*/
                                onChange={() => handleChange("name")}
                                required />
                            <label>EMAIL ADDRESS</label><br />
                            <input
                                placeholder="Enter your email"
                                /*value={data.email || ''}*/
                                onChange={() => handleChange("email")}
                                required />
                            <label>PHONE</label><br />
                            <input
                                placeholder="Enter your phone number"
                                /*value={data.email || ''}*/
                                onChange={() => handleChange("phone")}
                                required />
                            <label>MESSAGE</label><br />
                            <textarea rows="10" cols="49"
                                placeholder="Hello..."
                                /*value={data.email || ''}*/
                                onChange={() => handleChange("message")}
                                required />
                            <button className="ContactButton EmailSubmit" type="submit">SUBMIT</button>
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
                <div className="DropBox" >
                    <button>Dropbox placeholder</button>
                </div>
            </div>  
        </div>
    );
}

export default Contact;