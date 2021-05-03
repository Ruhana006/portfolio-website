import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ceec07k', 'template_tr466jt', e.target, 'user_ULaV2tdo1GNtsvM1PLJtC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contact">
            <h1 style={{ color: 'darkcyan', fontWeight: '900' }} className="text-center display-5">Keep In Touch</h1>
            <div>
                <div className="container mt-5 mb-5">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-4 mx-auto">
                            <div className="col-md-6 col-sm-12">
                                <div className=" form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Your Name" name="name" />
                                </div>
                                <div className="form-group pt-3 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="form-group pt-3 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="form-group pt-3 mx-auto">
                                    <textarea type="text" className="form-control" placeholder="Your Message" name="message" />
                                </div>
                                <div className="mx-auto pt-3">
                                    <input type="submit" className="btn download-btn" value="Send Message"></input>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 ps-5">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <h2 style={{ fontWeight: '900' }}>Contact:</h2>
                                        <h5>+8801775215552</h5>
                                        <h2 style={{ fontWeight: '900' }}>Address:</h2>
                                        <h5>2 No. Navy Gate, Khalishpur, Khulna, Bangladesh</h5>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <h2 style={{ fontWeight: '900' }}>Email:</h2>
                                        <h5>ritykarim33616@gmail.com</h5>
                                        <h2>Social Links:</h2>
                                        <a href="https://www.linkedin.com/in/ruhana-binte-karim/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" /></a>
                                        <a className="ps-3" href="https://www.facebook.com/rity.karim/" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x" /></a>
                                        <a className="ps-3" href="https://github.com/Ruhana006" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></a>
                                        <a className="ps-3" href="https://www.instagram.com/___rity006___/?hl=en" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;