import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

export const Character = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    // const [characterInfo, setcharacterInfo] = useState({})

    // console.log(useParams());

    // function getcharacterInfo() {
    //     fetch("https://www.swapi.tech/api/people/"+params.theid)
    //     .then(res => res.json())
    //     // .then(data => console.log(data))
    //     .then((data) => setcharacterInfo(data.result))
    //     .catch(err => console.error(err))
    // }

    useEffect(() => {
		actions.getcharacterInfo(params.theid);
        // store.getcharacterInfo();
	},[])
    
	// console.log(characterInfo);

    return ( 
    <div className="container mx-auto">
        <div className="card mx-auto my-auto" style={{width: "1000px", height: "700px"}}>
            <div className="row g-0 m-4">
                <div className="col">
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} className="card-img-top mb-1" alt="image" style={{width:"75%"}}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{store.characterInfo?.properties?.name}</h5>
                        <p className="card-text">{store.characterInfo?.description}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
            <div className="container text-center mb-3">
                <div className="row align-items-start text-danger">
                    <div className="col">
                        <p><strong>Name</strong></p>
                        <p className="card-text">{store.characterInfo?.properties?.name}</p>
                    </div>
                    <div className="col">
                        <p><strong>Birth Year</strong></p>
                        <p className="card-text">{store.characterInfo?.properties?.birth_year}</p>
                    </div>
                    <div className="col">
                        <p><strong>Gender</strong></p>
                        <p className="card-text">{store.characterInfo?.properties?.gender}</p>
                    </div>
                    <div className="col">
                        <p><strong>Homeworld</strong></p>
                        {/* <Link to={store.characterInfo.properties?.homeworld} className="btn btn-primary">Go to homeworld</Link> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

Character.propTypes = {
    match: PropTypes.object
};