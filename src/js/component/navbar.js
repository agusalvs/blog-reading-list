import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
    const {store, actions} = useContext(Context);
    console.log(store.favorites);
    return ( 
        <nav className = "navbar navbar-light bg-dark mb-3 d-flex">
            <Link to = "/">
                <span className = "navbar-brand mb-0 h1" > <img id="local-nav-logo-mobile" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_horiz_2x-f98247cb30aa_c622cfa9.png?region=0,0,732,75" alt="Portal Nav - Bottom"/> </span> 
            </Link> 
            <div className = "ml-auto">
                <Link to = "/demo" >
                <button className = "btn btn-primary" > Favorites </button>
                </Link> 
            </div> 
        </nav>
    );
};