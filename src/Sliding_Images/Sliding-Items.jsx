import React from 'react';

const SlidingItems = (props) => {
    const active=props.active;
    const classes=`carousel-item ${active}`;
    return (
        <>
            <div className={classes}>
                <img src={props.img} className="d-block w-100 img-fluid" alt="intenet is not working"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{props.mainHeading}</h5>
                    <p>{props.sub}</p>
                </div>
            </div>
        </>
    );
}
export {SlidingItems};