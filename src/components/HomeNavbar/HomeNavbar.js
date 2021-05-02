import React from 'react';
import './HomeNavbar.css'
const HomeNavbar = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand " href="#"><span style={{backgroundColor:'darkcyan',padding:'7px',borderRadius:'5px'}}>R</span>UHANA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item nav-text">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item nav-text">
                                <a class="nav-link" href="#about">About Me</a>
                            </li>
                            <li class="nav-item nav-text">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item nav-text">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item nav-text">
                                <a class="nav-link" href="#blogs">Blogs</a>
                            </li>
                            <li class="nav-item nav-text">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;