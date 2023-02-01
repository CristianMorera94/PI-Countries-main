import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryId } from "../redux/actions";
import NavBar from "./Nav";
import './styles/Detail.css'


export default function Detail(){
    const {id,}= useParams();
    const dispatch = useDispatch();
    const detailCountry = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getCountryId(id));
        },[dispatch,id]
    )

    return(
        <div className="cont-Detail">
            <div className="Bar">
                <NavBar className="Nar"/>
                <h3 className="title"> PI - Contries</h3>
            </div>
            <div>
                {detailCountry.length ?  <div className='loading'>
            <h1> Loading... </h1>
            </div>:
                <div>
                    <div className="container-detail">
                        <h1> {detailCountry.name}</h1>
                        <img src={detailCountry.imgFlag}/>
                    </div>
                    <div>
                        <h2>ID: {detailCountry.id}</h2>
                        <h3>Capital: {detailCountry.capital}</h3>
                        <h3>Continent: {detailCountry.continent}</h3>                                
                        <h3>Subregion: {detailCountry.subregion}</h3>                                    
                        <h3>Area: {detailCountry.area}km²</h3>
                        <h3>Population: {detailCountry.population}</h3> 
                    </div>
                    <div>
                    { detailCountry.activities?.map(e => {
                        return(
                            <div>
                                <ul>
                                    <li className="idtitle">Name: {e.name}</li>
                                </ul>
                            </div>
                        )
                    })}
                    </div>
            </div>
            }
            </div>
            <Link to= '/home'>BAck to Home</Link>
        </div>
    )
}