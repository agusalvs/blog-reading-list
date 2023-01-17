import React from "react";

const Card = (item) => {
    
    return ( 
        <div className="card-group">
            <div className="card">
                <img src="..." className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.properties.eye_color}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
