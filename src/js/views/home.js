import React, {useState, useEffect, useContext} from "react"; // 1. Llamo al hook useContext
import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js"; //Importo el Context (contexto)

export const Home = () => {

	const {store}=useContext(Context) //3.Activo el useContext y desestructuro las propiedades que quiero utilizar
	

	return(
		<>
	<div className="container d-flex row my-3 mx-3">
		{store.characters.map((props)=><Card name={props.name} id={props.uid} key={props.uid}/>)}
	</div>
	</>
	);
};
