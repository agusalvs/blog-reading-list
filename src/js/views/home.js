import React, {useState, useEffect, useContext} from "react"; // 1. Llamo al hook useContext
import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js"; //Importo el Context (contexto)

export const Home = () => {

	const {store}=useContext(Context) //3.Activo el useContext y desestructuro las propiedades que quiero utilizar

	// const [characters, setCharacters] = useState([]);
    // function getCharactersInfo() {
    //     fetch("https://www.swapi.tech/api/people/")
    //     .then(res => res.json())
    //     // .then(data => console.log(data))
    //     .then((data) => setCharacters(data.results));
    //     // .catch(err => console.error(err))
    // }

	// useEffect(() => {
	// 	getCharactersInfo();
	// },[])
	// console.log(characters);

		// return () => {
		// 	cleanup
		// }
	

	return(
		<>
	<div className="text-center mt-5">
		{store.characters.map((props)=><Card name={props.name} id={props.uid} key={props.uid}/>)}
	</div>
	</>
	);
};
