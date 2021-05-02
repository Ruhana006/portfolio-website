import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typed from 'react-typed'


const Blogs = () => {
    return (
        <div id="blogs" className="mt-5 mb-5">
            <div style={{ textAlign: 'center' }} className="bg-dark text-white p-2 mb-5 mt-5">
                <h1 className="display-5">Personal Blogs</h1>
                <a className="icon" href="https://admin.digitalpress.blog/a" target="_blank"><FontAwesomeIcon size="2x" icon={faEdit}/><h5>Visit My Blog Site</h5></a>
                <div className="mt-5 mb-5 p-5">
                    <Typed style={{ fontFamily: "italic" }} className="display-4" strings={['Blogs Are Coming Soon']} typeSpeed={60} backSpeed={60} loop></Typed>
                </div>
            </div>
        </div>

    );
};

export default Blogs;