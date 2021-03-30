//import { useState } from "react";
import contactImg from "../assets/ContactUs.jpg";
import PhotoHeading from "../components/PhotoHeading";
import GoogleMapReact from "../components/Maps";
import { useForm } from "../hooks/UseForm";

const googleMapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1727903986266!2d-117.90003788393508!3d33.78203583936687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd820edf7ee6b%3A0xb7b36013ddb9de90!2s12437%20Lewis%20St%20%23206%2C%20Garden%20Grove%2C%20CA%2092840!5e0!3m2!1sen!2sus!4v1617134261427!5m2!1sen!2sus";

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
                    value: '^[A-za-z0-9-_.]+@[A-za-z0-9-_.]+\.[A-za-z0-9-_.]+$',  // regular expression for emails
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
                    {/*<GoogleMapReact />*/}
                    <iframe src={googleMapSrc} width="auto" height="auto" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
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