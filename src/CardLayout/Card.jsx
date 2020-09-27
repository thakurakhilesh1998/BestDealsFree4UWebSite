import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from '../images/sample.jpg';
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card">
                    <img className="card-img-top img-fluid w-100 rounded" src={Sample} alt="internet is not loading" style={{height:"180px"}}></img>
                    <div className="card-body">
                        <h5 className="card-text">{props.brand}</h5>
                        <p class="card-text">
                            {props.info}
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
