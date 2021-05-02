import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Project.css'
import project1 from '../../images/project1.jpg'
import project3 from '../../images/project3.jpg'
import project4 from '../../images/project4.jpg'
import project5 from '../../images/project5.jpg'
import p5 from '../../images/project-5.jpg'
import p2 from '../../images/project-2.jpg'
import p4 from '../../images/p4.jpg'

const Projects = () => {
    return (
        <div id="projects" className="mt-5 mb-5">
            <h1 className="text-center display-5 mb-5 mt-5">My Recent Projects</h1>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5 col-sm-12 ">
                        <img className="img-fluid" src={project1} alt="" />
                    </div>
                    <div className="col-md-7 col-sm-12 ">
                        <h2>01</h2>
                        <h3 className="project">A Photography Service Website</h3>
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
                    <div className="col-md-7 col-sm-12 ">
                        <h2>02</h2>
                        <h3 className="project">Transport Service Website
                        </h3>
                        <p>An efficient web app for passengers to select their preferable transport services.
                        Applied firebase authentication for E-mail-Password, Facebook, and Google.
                        </p>
                        <h6>Used Tools: <span> React | React Router Dom | Firebase Authentication | React-Bootstrap | HTML |CSS | Firebase Deploy
                        </span></h6>
                        <div>
                            <a className="p-3" href=" https://rider-react-auth.web.app/ 
                             " target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="https://github.com/Ruhana006/hero-riders-
                            " target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                        <img className="img-fluid" src={p2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5">
                        <img className="img-fluid" src={project3} alt="" />
                    </div>
                    <div className="col-md-7 col-sm-12 ">
                        <h2>03</h2>
                        <h3 className="project">A React Application
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
            <div className="container mt-5 mb-5 ">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-7 col-sm-12 ">
                        <h2>04</h2>
                        <h3 className="project">E-commers Service Website</h3>
                        <p>An e-commers service website using MERN Stack where customers can access though google authentication and place order.</p>
                        <h6>Used Tools: <span>MERN Stack | React | React Router | Firebase Authentication | React-Bootstrap | HTML |CSS | Firebase | Heroku</span></h6>
                        <div>
                            <a className="p-3" href="https://fullstack-client.web.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href=" https://github.com/Porgramming-Hero-web-course/full-stack-client-Ruhana006" target="_blank"><FontAwesomeIcon icon={faGithubSquare} />Code Link</a>
                            <a className="p-3" href="https://github.com/Porgramming-Hero-web-course/full-stack-server-Ruhana006 " target="_blank"><FontAwesomeIcon icon={faCode} />Server</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                        <img className="img-fluid" src={p4} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                <div className="col-md-5 col-sm-12 ">
                        <img className="img-fluid" src={p5} alt="" />
                    </div>
                    <div className="col-md-7 col-sm-12 ">
                        <h2>05</h2>
                        <h3 className="project">Single Page Soccer Player Selection with React</h3>
                        <p>React application where data is loaded from FakaData using useEffect hook. Clicking on player add button it's added to the total cart showing total salary amount.</p>
                        <h6>Used Tools: React | React Hooks | JavaScript | HTML | CSS</h6>
                        <div>
                            <a className="p-3" href=" https://dazzling-panini-c8886c.netlify.app/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="  https://github.com/Porgramming-Hero-web-course/simple-react-Ruhana006" target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-7 col-sm-12">
                        <h2>06</h2>
                        <h3 className="project">Restaurant Meal Recipe Search Website</h3>
                        <p>API based JavaScript application where user can search meals and the recipes</p>
                        <h6>Used Tools: JavaScript | ES6 | CSS</h6>
                        <div>
                            <a className="p-3" href="https://ruhana006.github.io/Assignment05-API/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="https://github.com/Ruhana006/Assignment05-API" target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img className="img-fluid" src={project4} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-7">
                <div className="row d-flex align-items-center justify-content-center" >
                    <div className="col-md-5 col-sm-12">
                        <img className="img-fluid" src={project5} alt="" />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <h2>07</h2>
                        <h3 className="project">Full Responsive Single Page Website</h3>
                        <p>Responsive for large, medium and small devices using pure Bootstrap5. Form section for customers to place order</p>
                        <h6>Used Tools:HTML | CSS | Bootstrap </h6>
                        <div>
                            <a className="p-3" href="https://ruhana006.github.io/Assignment-02/" target="_blank"><FontAwesomeIcon icon={faLink} />Site Link</a>
                            <a href="  https://github.com/Ruhana006/Assignment-02" target="_blank"><FontAwesomeIcon icon={faCode} />Code Link</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;