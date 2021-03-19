//import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";
import GoogleMapReact from "../components/Maps";
import { useForm } from "../hooks/UseForm";

function Contact() {
    const {
        data,
        errors,
        handleChange,
        handleSubmit
    } = useForm({
        validations: {
            fname: {
                required: {
                    value: true,
                    message: 'Name field is required',
                },
                pattern: {
                    value: '^[A-Z a-z]*$',
                    message:
                        "Your name cannot contain numbers or special characters",
                },
            },
            email: {
                required: {
                    value: true,
                    message: 'Email field is required',
                },
                pattern: {
                    value: '^([a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,7})$',  // regular expression for emails
                    message:
                        "Please enter a valid email",
                },
            },
            phone: {
                required: {
                    value: true,
                    message: 'Phone field is required',
                },
                pattern: {
                    value: '^[0-9\(\) -]*$',
                    message:
                        "Please enter a valid number",
                },
            },
            message: {
                required: {
                    value: true,
                    message: 'Message field is required',
                },
            }
        },
        onSubmit: () => alert('Message Sent!'),
        initialValues: {
            fname: '',
            email: '',
            phone: '',
            message: '',
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
                                name="fname"
                                value={data["fname"] || ''}
                                onChange={handleChange} />
                            {errors.fname && <p className="error">{errors.fname}</p>}
                            <label>EMAIL ADDRESS</label><br />
                            <input
                                placeholder="Enter your email"
                                name="email"
                                value={data["email"] || ''}
                                onChange={handleChange} />
                            {errors.email && <p className="error">{errors.email}</p>}
                            <label>PHONE</label><br />
                            <input
                                placeholder="Enter your phone number"
                                name="phone"
                                value={data["phone"] || ''}
                                onChange={handleChange} />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                            <label>MESSAGE</label><br />
                            <textarea rows="10" cols="49"
                                placeholder="Hello..."
                                name="message"
                                value={data["message"] || ''}
                                onChange={handleChange} />
                            {errors.message && <p className="error">{errors.message}</p>}
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