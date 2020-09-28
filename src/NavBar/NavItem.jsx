import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import '../css/nav-bar.css';

const NavItem=(props)=>{
    return(
        <>
    <li className="nav-item mx-2 px-1 nav-list">
        <NavLink exact activeClassName="acitve" className="nav-link text-white text-uppercase  link-text" to={props.url}>{props.title}</NavLink>
    </li>
    </>
    );
}

export {NavItem};