import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavItem=(props)=>{
    return(
        <>
    <li className="nav-item mx-2 px-1 nav-list">
        <a href={props.url} className="nav-link text-white text-uppercase  link-text">{props.title}</a>
    </li>
    </>
    );
}

export {NavItem};