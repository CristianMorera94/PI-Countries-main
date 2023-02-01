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
                <Link className="btnHome" to= '/home'>Back to Home</Link>
            </div>
            <div>
                {detailCountry.length ?  
                <div className='loading'>
                    <h1> Loading... </h1>
                </div>:
                <div className="container-detail">
                    <div className="container-detail2">
                        <h1 className="title-country"> {detailCountry.name}</h1>
                        <img className="flagimg" src={detailCountry.imgFlag}/>
                    </div>
                    <div className="container-detail3">
                        <div className="container-detail4">
                            <h2 className="text-id">ID: {detailCountry.id}</h2>
                            <h3 className="text">Capital: {detailCountry.capital}</h3>
                            <h3 className="text">Continent: {detailCountry.continent}</h3>                                
                            <h3 className="text">Subregion: {detailCountry.subregion}</h3>                                    
                            <h3 className="text">Area: {detailCountry.area}km²</h3>
                            <h3 className="text">Population: {detailCountry.population}</h3> 
                        </div>
                        <div className="container-activity">
                        { detailCountry.activities?.map(e => {
                            return(
                                <div>
                                    <ul>
                                        <li className="txt">Name: {e.name}</li>
                                    </ul>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}