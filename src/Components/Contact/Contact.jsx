import React, { useRef } from 'react';
import './Contact.css';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_299879y', 'template_f9u98ep', form.current, 'oRVRC2SMGdLZcBWPV')
            .then(
                (result) => {
                    alert('SUCCESS!');
                    console.log('Email successfully sent:', result.text);
                    form.current.reset();
                },
                (error) => {
                    alert(`FAILED... ${error.text}`);
                    console.log('Email sending failed:', error);
                }
            );
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <CiLocationOn />
                            <p>Ojido Market Odo-Ado, Ado-Ekiti, Ekiti State</p>
                        </div>
                        <div className="contact-detail">
                            <BsTelephoneOutbound />
                            <a href="tel:09063699768" className="phone-link">09063699768</a>
                        </div>

                        <div className="contact-detail">
                        <FaWhatsapp /> 
                        <a href="https://wa.me/+2349063699768" target="_blank" rel="noopener noreferrer" className="phone-link">
                            <p className="phone-link">09063699768</p>
                        </a>
                        

                        </div>
                    </div>
                </div>
                <form onSubmit={sendEmail} ref={form} className="contact-right">
                    <label htmlFor='name'>Your name</label>
                    <input type="text" placeholder='Enter Your Name' name='from_name' required />
                    <label htmlFor='email'>Your Email</label>
                    <input type="email" placeholder='Enter Your Email' email='to_email' required />
                    <label htmlFor='message'>Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
