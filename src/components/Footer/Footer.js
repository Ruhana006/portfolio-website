import React from 'react';


const Footer = () => {
    return (
        <div className="bg-dark mt-3"style={{height:'50px'}}>
            <footer className="footer text-center ">
            <small style={{color:'white'}}> Copyright {(new Date()).getFullYear()} All Rights Reserved By <span style={{color:'darkcyan'}} >Ruhana Binte Karim</span></small>
            </footer>
        </div>
    );
};

export default Footer;