import React from 'react';
import Banner from '../images/banner.png';
import {Contact_Form} from './Contact_Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css';

const About=()=>{
    return(<>
        <div className="d-flex flex-sm-column justify-content-center align-items-center p-4 flex-wrap">
            <h3 className="text-center text-uppercase font-weight-bold text-primary" id="heading">Best Deals Free 4U</h3>
            {/* <img src={Banner} className="img-fluid" id="banner"></img> */}
            <p className="text-center h5" id="about-text">
            "This Website gives you latest shopping deals. If you like shopping then it is the best place for you.
            Daily visit this website and get the cheapest deals from the all of the e commerce website. 
            This website also give you the earning tips daily. Visit Website daily and get excitig deals!!!."
            </p>
            <Contact_Form/>
        </div>
    </>);
}

export {About};