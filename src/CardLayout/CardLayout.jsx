import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Card';

const CardLayout=()=>{
    return (<>
        <div className="container-fluid">
            <div className="row">
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>                                                                
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>
                    <Card key="0" img="" brand="Flipkart" info="Some quick example text to build on the card title and make up the
                            bulk of the card's content."/>

                </div>
        </div>
    </>);
}

export {CardLayout};