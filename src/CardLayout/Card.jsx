import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from '../images/sample.jpg';
const Card = () => {
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card">
                    <img className="card-img-top img-fluid w-100 rounded" src={Sample} alt="internet is not loading" style={{height:"180px"}}></img>
                    <div className="card-body">
                        <h5 className="card-text">Flipkart</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary text-right d-block float-right">
                            Go To Store
                        </a>  
                    </div>
                </div>
            </div>        
        </>
    );
};

export { Card };
