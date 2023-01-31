import React from "react";
import './styles/AllCard.css'

export default function AllCard ({name, image}){
    return(
        <div className="AllCard">
            <img className="img-c" src={image} alt="img not foud" width="150px" height="100" />
            <h3 className="name">{name}</h3>
        </div>
    )
}