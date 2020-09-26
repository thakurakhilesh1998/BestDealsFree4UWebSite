import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sample from '../images/sample.jpg';
import Sample1 from '../images/sample1.jpg';
import Sample2 from '../images/sample2.jpg';
import '../css/Sliding.css';


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
                        <div className="carousel-item active">
                            <img src={Sample} className="d-block w-100 img-fluid" alt="intenet is not working"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Sample1} className="d-block w-100" alt="intenet is not working"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Sample2} className="d-block w-100" alt="intenet is not working"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                            </div>
                        </div>
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
        </>
        );
}

export {Sliding};