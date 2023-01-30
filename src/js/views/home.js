import React, {useState, useEffect, useContext} from "react"; // 1. Llamo al hook useContext
import "../../styles/home.css";
import Card from "../component/card.js";
import { Context } from "../store/appContext.js"; //Importo el Context (contexto)

export const Home = () => {

	const {store}=useContext(Context) //3.Activo el useContext y desestructuro las propiedades que quiero utilizar
	

	return(
		<>
		<div className="row flex-nowrap overflow-auto mx-auto scrollbar scrollbar-black bordered-black square" style={{width:"90%", backgroundColor: "black"}}>
			{store.characters.map((props)=> <div className="col"><Card name={props.name} id={props.uid} key={props.uid}/></div>)}
		</div>
	</>
	);
};

// row my-3 mx-3