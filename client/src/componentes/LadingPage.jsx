import React from "react";
import { Link }  from 'react-router-dom';
import "./styles/LadingPage.css"

export default function LadingPage (){
    return(
        <div className="Container">
            <h1 className="Title">Country Henry-PI</h1>
            <Link to = '/home'>
                <button className="Button">Ingresar</button>
            </Link>
        </div>
    )
}