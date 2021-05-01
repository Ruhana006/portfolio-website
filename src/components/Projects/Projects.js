import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import project1 from '../../images/project1.jpg'
import project2 from '../../images/project2.jpg'
import project3 from '../../images/project3.jpg'
import project4 from '../../images/project4.jpg'
import project5 from '../../images/project5.jpg'

const Projects = () => {
    return (
        <div id="projects" className="mt-5 mb-5">
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5">
                        <img className="img-fluid" src={project1} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>01</h2>
                        <h3>Elegance Photography  — A Photography Service Website
                        </h3>
                        <p>The firebase Authentication-based web app provides clients with photography services where they can book services and give their reviews on them. Admins can add services and other admins as well.</p>
                        <h6>Used Tools: <span> MERN Stack | React | React Router | Firebase Authentication | React-Bootstrap | HTML |CSS | Firebase | Heroku
                        </span></h6>
                        <div>
                            <a className="p-3" href=" https://complete-website-client-2cf66.web.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="https://github.com/Ruhana006/elegance-photography-client
                             " target="_blank"><FontAwesomeIcon icon={faGithubSquare} />Client</a>
                            <a className="p-3" href=" https://github.com/Ruhana006/elegance-photography-server
                             " target="_blank"><FontAwesomeIcon icon={faCode} />Server</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-7">
                        <h3>Hero Riders — Transport Service Website
                        </h3>
                        <p>An efficient web app for passengers to select their preferable transport services.
                        Applied firebase authentication for E-mail-Password, Facebook, and Google.
                        </p>
                        <h6>Used Tools: <span> React | React Router | Firebase Authentication | React-Bootstrap | HTML |CSS | Firebase Deploy
                        </span></h6>
                        <div>
                            <a className="p-3" href=" https://rider-react-auth.web.app/ 
" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="https://github.com/Ruhana006/hero-riders-
" target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={project2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5">
                        <img className="img-fluid" src={project3} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h3>Sports Maniac — A React Application
                        </h3>
                        <p>A web app for soccer enthusiasts to find their favorite teams’ details and other descriptions.
                        </p>
                        <h6>Used Tools: <span> API | React | React Router Dom |  Bootstrap | HTML | CSS | Netlify |
                        </span></h6>
                        <div>
                            <a className="p-3" href=" https://friendly-thompson-ee1450.netlify.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href=" https://github.com/Ruhana006/sports-maniac " target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-7">
                        <h6></h6>
                        <p></p>
                        <div>
                            <a className="p-3" href=" https://friendly-thompson-ee1450.netlify.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href=" https://github.com/Ruhana006/sports-maniac " target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={project4} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5">
                        <img className="img-fluid" src={project5} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h6></h6>
                        <p></p>
                        <div>
                            <a className="p-3" href=" https://friendly-thompson-ee1450.netlify.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href=" https://github.com/Ruhana006/sports-maniac " target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;