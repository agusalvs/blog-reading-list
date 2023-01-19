import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {
    const {store, actions} = useContext(Context);

    return ( 
        <div className="card-group row d-flex justify-content-center">
            <div className="card" style={{maxWidth: "30%"}}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" style={{width: "200px", height: "300px"}} alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Descripción</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <Link to={"/single/"+props.id} className="btn btn-primary float-start">Learn more!</Link>
                    <Link onClick={()=>actions.agregarFavorito(props.name)} className="btn btn-primary float-end"><i className="fa fa-heart"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
