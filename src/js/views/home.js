import React, {useState, useEffect} from "react";
import "../../styles/home.css";
import Card from "../component/card.js";

export const Home = () => {

	const [characters, setCharacters] = useState([]);
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

		// return () => {
		// 	cleanup
		// }
	

	return(
		<>
	<div className="text-center mt-5">
		{characters.map((props)=><Card name={props.name} id={props.uid} key={props.uid}/>)}
	</div>
	</>
	);
};
