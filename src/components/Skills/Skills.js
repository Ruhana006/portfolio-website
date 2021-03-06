import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHandPointRight, faLaptopCode, faSwatchbook, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div id="skills" className="mt-5">
            <h1 style={{ color: 'darkcyan', fontWeight: '900' }} className="text-center display-5">My Skills</h1>
            <div className="container mt-5 mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 skills">
                        <h1 style={{ color: 'darkcyan', fontWeight: '900' }} className="text-center">Technical Skills</h1>
                        <li>
                            <h4>HTML5</h4><span className="bar"><span className="html5"></span></span>
                        </li>
                        <li>
                            <h4>CSS3</h4><span className="bar"><span className="css3"></span></span>
                        </li>
                        <li>
                            <h4>Bootstarp</h4><span className="bar"><span className="bootstrap"></span></span>
                        </li>
                        <li>
                            <h4>JavaSrcipt</h4><span className="bar"><span className="js"></span></span>
                        </li>
                        <li>
                            <h4>Phython</h4><span className="bar"><span className="python"></span></span>
                        </li>
                        <li>
                            <h4>React.Js</h4><span className="bar"><span className="react"></span></span>
                        </li>
                        <li>
                            <h4>MERN Stack</h4><span className="bar"><span className="mern"></span></span>
                        </li>
                        <li>
                            <h4>Git</h4><span className="bar"><span className="git"></span></span>
                        </li>
                        <li>
                            <h4>Firebase</h4><span className="bar"><span className="firebase"></span></span>
                        </li>
                    </div>
                    <div className="col-md-6 col-sm-12 familiar" >
                        <h1 style={{ color: 'darkcyan', fontWeight: '900' }} className="text-center">Professional Skills</h1>
                        <div className="container ps-2">
                            <div className="row mb-3">
                                <div className="col-md-4 skill-box ">
                                    <li><FontAwesomeIcon size="3x" icon={faLaptopCode} /></li>
                                    <h4 className="text-center m-2">Web Designing</h4>
                                </div>
                                <div className="col-md-4 skill-box">
                                    <li><FontAwesomeIcon size="3x" icon={faConnectdevelop} /></li>
                                    <h4 className="text-center m-2 ps-2"> Front-End Developer</h4>
                                </div>
                                <div className="col-md-4 skill-box">
                                    <li><FontAwesomeIcon size="3x" icon={faClock} /></li>
                                    <h4 className="text-center m-2 ps-2">Time Management</h4>
                                </div>
                            </div>
                        </div>
                        <h1 style={{ color: 'darkcyan', fontWeight: '900' }} className="text-center">Familiar With</h1>
                        <div className="ps-5">
                            <li><h4><FontAwesomeIcon className="icon" icon={faHandPointRight} /> React Native</h4></li>
                            <li><h4><FontAwesomeIcon className="icon" icon={faHandPointRight} /> Object Oriented Programmimg (OOP)</h4></li>
                            <li><h4><FontAwesomeIcon className="icon" icon={faHandPointRight} /> TypeScript</h4></li>
                            <li><h4><FontAwesomeIcon className="icon" icon={faHandPointRight} /> Material UI</h4></li>
                            <li><h4><FontAwesomeIcon className="icon" icon={faHandPointRight} /> SASS</h4></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;