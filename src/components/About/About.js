import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myPic from '../../images/me2.png'
const About = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={myPic} alt=""/>
                </div>
                <div className="col-md-8">
                   <h1>Assalamualaikum</h1>
                   <h4>I am Ruhana Binte Karim</h4>
                   <h6>Junior Front-End Developer</h6>
                   <p>I am currently doing a major in Materials Science and Engineering and never in my plans I thought to be a Web Developer until I took a course on Web Development by Programming Hero.
                    <br/>So, it all started with exploring basic web development and ended up with a mindset on making a career in this sector.<br/> In my current role as a Junior web developer, I have developed web-based applications from designing to coding under the direction of the senior developer.  On a personal level, I am persistent, efficient, and exacting in everything I do.    
                   </p>
                   <div>
                       <h6>E-mail: ritykarim33616@gmail.com </h6>
                       <h6>Website: www.mywebsite.com
                       </h6>
                       <h6>Social Links</h6>
                       <div >
                           <a href="https://www.linkedin.com/in/ruhana-binte-karim/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                           <a href="https://www.facebook.com/rity.karim/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                           <a href="https://github.com/Ruhana006" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                           <a href="https://www.instagram.com/___rity006___/?hl=en"target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>   
                       </div>
                       <h6>My Resume</h6>
                       <br/>
                       <button className="btn btn-dark"><FontAwesomeIcon icon={faDownload}/> Download My Resume</button>
                   </div>
                </div>
            </div>   
        </div>
    );
};

export default About;