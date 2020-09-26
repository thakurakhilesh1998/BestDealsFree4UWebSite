import React from 'react';

const SlidingItems = (props) => {

    return (

        <>
            <div className="carousel-item {props.active}">
                <img src={Sample} className="d-block w-100 img-fluid" alt="intenet is not working"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{props.mainHeading}</h5>
                    <p>{props.sub}</p>
                </div>
            </div>
        </>
    );
}