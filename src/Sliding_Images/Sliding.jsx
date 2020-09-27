import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sample from '../images/sample.jpg';
import Sample1 from '../images/sample1.jpg';
import Sample2 from '../images/sample2.jpg';
import '../css/Sliding.css';
import {SlidingItems} from './Sliding-Items';


const Sliding =()=>{

    return(
        <>
            <div id="slide-show" className="carousel slide carousel-fade slide-show" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slide-show" data-slide-to="0" class="active"></li>
                        <li data-target="#slide-show" data-slide-to="1"></li>
                        <li data-target="#slide-show" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <SlidingItems key="0" active="active" img={Sample}  mainHeading="100 % cashbakc" sub="Flip kart"/>
                        <SlidingItems key="1" active="" img={Sample1}  mainHeading="100 % cashbakc" sub="Flip kart"/>
                        <SlidingItems key="2" active="" img={Sample2}  mainHeading="100 % cashbakc" sub="Flip kart"/>
                    </div>
                    <a class="carousel-control-prev" href="#slide-show" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#slide-show" role="button" data-slide="next">
                        <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
            <hr style={{margin:"1rem",height:"1px"}} className="bg-primary"></hr>
        </>
        );
}

export {Sliding};