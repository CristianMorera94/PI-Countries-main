import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryId } from "../redux/actions";

export default function Detail(props){
    console.log(props);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountryId(props.match.params.id));
        },[dispatch]
    )

    const country = useSelector((state) => state.detail)

    return(
        <div className="Detail">
            {
                country.length>0?
                <div>
                <div className="container-detail">
                    <h1> {country.name}</h1>
                    <img src={country.imgFlag}/>
                </div>
                <div>
                    <h2>ID: {country.id}</h2>
                    <h3>Capital: {country.Capital}</h3>                                
                    <h3>Subregion: {country.Subregion}</h3>                                    
                    <h3>Area: {country.Area}km²</h3>                                    
                    <h3>Population: {country.Population}</h3>
                </div>
                </div>: <p>Loading...</p>
            }
            <Link to= '/home'>BAck to Home</Link>
        </div>
    )
}