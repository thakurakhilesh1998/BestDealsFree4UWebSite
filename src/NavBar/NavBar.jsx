import React from 'react';
import Logo from '../images/logo.png';
import '../css/nav-bar.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import {NavItem} from './NavItem';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const NavBar=()=>{
    return(<>
           <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-info">
           <div className="container">
                <NavLink className="navbar-brand" to="/"> <img src={Logo} alt="loading" className="img-fluid"></img></NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem key="0" url="/" title="Deals"/>
                        <NavItem key="1" url="/earning_offers" title="Earning Offers"/>
                        <NavItem key="2" url="/about" title="About"/>
                    </ul>
                </div>
            </div>
           </nav>
        </>);
}

export {NavBar};
