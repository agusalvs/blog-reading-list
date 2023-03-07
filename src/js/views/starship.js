import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

export const Starship = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
		actions.getStarshipInfo(params.theid);
        // store.getStarshipInfo();
	},[])
    
	// console.log(starshipInfo);

    return ( 
    <div className="container mx-auto">
        <div className="card mx-auto my-auto" style={{width: "1000px", height: "700px"}}>
            <div className="row g-0 m-4">
                <div className="col">
                <img src={"https://starwars-visualguide.com/assets/img/starships/"+params.theid+".jpg"} className="card-img-top mb-1" alt="image" style={{width:"75%"}}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{store.starshipInfo?.properties?.name}</h5>
                        <p className="card-text">{store.starshipInfo?.description}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
            <div className="container text-center mb-3">
                <div className="row align-items-start text-danger">
                    <div className="col">
                        <p><strong>Name</strong></p>
                        <p className="card-text">{store.starshipInfo?.properties?.name}</p>
                    </div>
                    <div className="col">
                        <p><strong>Birth Year</strong></p>
                        <p className="card-text">{store.starshipInfo?.properties?.birth_year}</p>
                    </div>
                    <div className="col">
                        <p><strong>Gender</strong></p>
                        <p className="card-text">{store.starshipInfo?.properties?.gender}</p>
                    </div>
                    <div className="col">
                        <p><strong>Homeworld</strong></p>
                        {/* <Link to={store.starshipInfo.properties?.homeworld} className="btn btn-primary">Go to homeworld</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

Starship.propTypes = {
    match: PropTypes.object
};