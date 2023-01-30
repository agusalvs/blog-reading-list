import React, {useState, useEffect, useContext} from "react"; // 1. Llamo al hook useContext
import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js"; //Importo el Context (contexto)

export const Home = () => {

	const {store}=useContext(Context) //3.Activo el useContext y desestructuro las propiedades que quiero utilizar
	

	return(
		<>
		<h2 className="ms-5 ps-5">Characters</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%"}}>
			{store.characters.map((props)=>
			<div className="col">
				<Card name={props.name} id={props.uid} key={props.uid}/>
			</div>)}
		</div>

		<h2 className="ms-5 ps-5 mt-5">Planets</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square mb-5" style={{width:"90%"}}>
			{store.characters.map((props)=> <div className="col"><Card name={props.name} id={props.uid} key={props.uid}/></div>)}
		</div>

		<h2 className="ms-5 ps-5">Starships</h2>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%"}}>
			{store.characters.map((props)=> <div className="col"><Card name={props.name} id={props.uid} key={props.uid}/></div>)}
		</div>
	</>
	);
};

// row my-3 mx-3