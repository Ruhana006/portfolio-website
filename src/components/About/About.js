import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myPic from '../../images/me1.png'
const About = () => {
    return (
        <div id="about" className="container mt-5 mb-5">
            <h1 className="text-center display-5 mb-5 mt-5">About Me</h1>
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <img className="img-fluid" src={myPic} alt=""/>
                </div>
                <div className="col-md-8 col-sm-12  px-4 pt-2">
                   <h4>Assalamualaikum</h4>
                   <h2>I am <span style={{fontWeight:'900',color:'darkcyan'}}>Ruhana Binte Karim</span></h2>
                   <h6>Junior Front-End Developer</h6>
                   <p>I am currently doing a major in Materials Science and Engineering and never in my plans I thought to be a Web Developer until I took a course on Web Development by Programming Hero.
                    <br/>Now I make websites for you and I'm fixated on making a career as a React Front-End Developer and give the best service which you deserve<br/> In my current role as a Junior web developer, I have developed web-based applications from designing to coding under the direction of the senior developer.  On a personal level, I am persistent, efficient, and exacting in everything I do and always eager to keep pace with new technologies.    
                   </p>
                   <div>
                       <h6>E-mail: ritykarim33616@gmail.com </h6>
                       <h6>Website: www.mywebsite.com
                       </h6>
                       <div >
                           <a className="ps-3" href="https://www.linkedin.com/in/ruhana-binte-karim/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size="2x"/></a>
                           <a className="ps-3" href="https://www.facebook.com/rity.karim/" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x"/></a>
                           <a className="ps-3" href="https://github.com/Ruhana006" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="2x"/></a>
                           <a className="ps-3" href="https://www.instagram.com/___rity006___/?hl=en"target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon" size="2x"/></a> 
                           <br/>
                           <br/>
                           <a className="ps-5" href="https://drive.google.com/uc?export=download&amp;id=1l8cJ3Ku46pSaiZpgi57Bi9e8n-56tTnb"  target="_blank" type="button" className="btn download-btn"><FontAwesomeIcon icon={faDownload}/>Download My Resume</a> 
                       </div>                     
                   </div>
                </div>
            </div>   
        </div>
    );
};

export default About;