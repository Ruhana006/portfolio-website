import React from 'react';
import './HeaderMain.css';
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <div id="home" className="header-container">
            <div className="container info">
                <div className="row d-flex align-items-center justify-content-center">
                   <div className="col-md-7">
                       <h1 style={{color:'darkcyan', fontWeight:'900'}} className="display-4">I'm Ruhana Binte Karim</h1>
                       <Typed className="typed-text" strings={['Front-End Developer','Web Designer','React Developer']} typeSpeed={40} backSpeed={60} loop></Typed>
                       <br/>
                       <a href="https://drive.google.com/uc?export=download&amp;id=1bObpVYa_-4E8umRpEqjxNeiLQBVW-Uql" target="_blank" type="button"  className="btn download-btn"><FontAwesomeIcon icon={faDownload}/>Download My Resume</a> 
                   </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;