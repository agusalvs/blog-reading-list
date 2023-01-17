import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    
    return ( 
        <div className="card-group">
            <div className="card">
                <img src="..." className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Descripción</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <Link to={"/single/"+props.id} className="btn btn-primary">Learn more!</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
