import React from 'react';
import './HeaderMain.css';
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <div className="header-container">
            <div className="container info">
                <div className="row d-flex align-items-center justify-content-center">
                   <div className="col-md-7">
                       <h1>HELLLOOOO</h1>
                       <Typed className="typed-text" strings={['Front-End Developer','Web Designer','React Developer']} typeSpeed={40} backSpeed={60} loop></Typed>
                       <br/>
                       <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faPhone}/>Contact Me</button>
                   </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;