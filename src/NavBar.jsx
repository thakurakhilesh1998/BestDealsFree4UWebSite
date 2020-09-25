import React from 'react';
import Logo from './images/logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const NavBar=()=>{
    return(<>
           <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-primary">
                <a className="navbar-brand"> <img src={Logo} alt="loading"></img></a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a href="http//:www.google.com" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="http//:www.google.com" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="http//:www.google.com" className="nav-link">Home</a></li>
                </ul>
           </nav>
        </>);
}

export {NavBar};
