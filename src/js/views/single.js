import React, {useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {Context} from "../store/appContext";

export const Single = props => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const [characters, setCharacters] = useState([]);

    console.log(useParams());

    function getCharactersInfo() {
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        // .then(data => console.log(data))
        .then((data) => setCharacters(data.results));
        // .catch(err => console.error(err))
    }

    useEffect(() => {
		getCharactersInfo();
	},[])
	console.log(characters);

    return ( 
        <div className = "jumbotron">
            <h1 className = "display-4"> Character's details: {params.theid} </h1>
            {/* {store.demo[params.theid].title} */}
            <hr className = "my-4"/>
            <Link to = "/" >
                <span className = "btn btn-primary btn-lg" href = "#" role = "button">
                    Back home 
                </span>
            </Link >
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};