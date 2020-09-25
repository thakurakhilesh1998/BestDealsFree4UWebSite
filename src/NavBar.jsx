import React from 'react';
import Logo from './images/logo.png';
import './css/nav-bar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const NavBar=()=>{
    return(<>
           <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-info">
           <div className="container">
                <a className="navbar-brand"> <img src={Logo} alt="loading" className="img-fluid"></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-2"><a href="http//:www.google.com" className="nav-link text-white text-uppercase  link-text">Deals</a></li>
                        <li className="nav-item mx-2"><a href="http//:www.google.com" className="nav-link text-white text-uppercase  link-text">Earning Offers</a></li>
                        <li className="nav-item mx-2"><a href="http//:www.google.com" className="nav-link text-white text-uppercase  link-text">About</a></li>
                    </ul>
                </div>
            </div>
           </nav>
        </>);
}

export {NavBar};
