import React from "react";
import { Card } from "../CardLayout/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Earning_Offers = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Card
          key="0"
          img=""
          brand="Flipkart"
          info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."
        ></Card>
        <Card
          key="1"
          img=""
          brand="Flipkart"
          info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."
        ></Card>
        <Card
          key="2"
          img=""
          brand="Flipkart"
          info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."
        ></Card>
        <Card
          key="3"
          img=""
          brand="Flipkart"
          info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."
        ></Card>
      </div>
    </div>
  );
};

export { Earning_Offers };
