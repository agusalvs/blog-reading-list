import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

export const Single = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const [charactersInfo, setCharactersInfo] = useState({})

    // console.log(useParams());

    function getCharactersInfo() {
        fetch("https://www.swapi.tech/api/people/"+params.theid)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then((data) => setCharactersInfo(data.result))
        .catch(err => console.error(err))
    }

    useEffect(() => {
		getCharactersInfo();
	},[])
    
	console.log(charactersInfo);

    return ( 

        <div className="card mb-3 mx-auto" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://www.greenstuffworld.com/creative/imagenes-proyecto/77796d8a70dc15152371e4e7b08e66c3a1dcf8ae6838638267836.jpg" className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{charactersInfo?.properties?.name}</h5>
                        <p className="card-text">{charactersInfo?.description}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        {/* <Link to = "/" >
                            <span className = "btn btn-primary btn-lg" href = "#" role = "button">
                                Back home 
                            </span>
                        </Link > */}
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row align-items-start text-danger">
                    <div className="col">
                        <p><strong>Name</strong></p>
                        <p className="card-text">{charactersInfo?.properties?.name}</p>
                    </div>
                    <div className="col">
                        <p><strong>Birth Year</strong></p>
                        <p className="card-text">{charactersInfo?.properties?.birth_year}</p>
                    </div>
                    <div className="col">
                        <p><strong>Gender</strong></p>
                        <p className="card-text">{charactersInfo?.properties?.gender}</p>
                    </div>
                    <div className="col">
                        <p><strong>Homeworld</strong></p>
                        {/* <Link to={charactersInfo?.properties?.homeworld} className="btn btn-primary">Go to homeworld</Link> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

Single.propTypes = {
    match: PropTypes.object
};