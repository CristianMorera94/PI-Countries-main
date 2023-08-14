import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {    getAllCountries, 
            filterByContinent,
            filterByActivity,
            sortByName,
            sortByPopulation 
        } from "../redux/actions/index"
import AllCard from "./AllCard";
import Pagination from "./pagination";
import './styles/Home.css'
import NavBar from "./Nav";
import SearchBar from "./SearchBar.jsx"

export default function Home(){

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    const allActivities = useSelector((state) => state.activities);
    const allCountries = useSelector((state) => state.countries);  
    
    const [currentPage, setCurrentPage] = useState(1)
    const [ countriesPage, setCountriesPage] = useState(9)///cantidad de personajes por pagina

    const [sortName, setSortName] = useState("");
    const [sortPopulation, setSortPopulation] = useState("");

    const [ setSortLetter] = useState("")

    const indexOfLastCountries = currentPage * countriesPage
    const indexOfFirstCountries = indexOfLastCountries - countriesPage;
    const currentCountries = allCountries.slice(indexOfFirstCountries,indexOfLastCountries)

    //paginado 
    const pagination = (pageNumber) =>{
        if (pageNumber === 1 ) {
            setCountriesPage(9)
            setCurrentPage(pageNumber)
        } else if (pageNumber > 25) {
            setCountriesPage(10)
            setCurrentPage(25)
        } else {
            setCountriesPage(10)
            setCurrentPage(pageNumber)
        }
        
    }
    
    /*function handleClick(e) {
        e.preventDefault();
        dispatch(getAllCountries());
    }*/

    ///funcion filtado por continentes 
    function handleFilterByContinent(payload){
        dispatch(filterByContinent(payload.target.value));
        setCurrentPage(1);
    }

    ///ordenar por orden alfabetico 
    function handleSortByName(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setCurrentPage(1);
        setSortName(`Sort ${e.target.value}`);
    }

    ///filtrado por actividades
    function handleFilterByActivity (e) {
        dispatch(filterByActivity(e.target.value));
        console.log(e.target.value)
        setCurrentPage(1)
    }

    ///filtro de poblacion
    function handleSortByPopulation(e) {
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value));
        setCurrentPage(1);
        setSortPopulation(`Sort ${e.target.value}`);
    }

    return(
        <div className="cont-home">
            <div className="cont-home2">
                <div className="Bar-home">
                    <NavBar className ="navBar"/>
                    <h3 className="title-home"> PI - Contries</h3>
                    <SearchBar className="search"/>
                </div>
                <div className="cont-filter">
                    <select className = "filter" onChange={e => handleFilterByContinent(e)}>
                        <option value = "All">Continent</option>
                        <option value = "Africa">Africa</option>
                        <option value = "Antarctica">Antarctica</option>
                        <option value = "Asia">Asia</option>
                        <option value = "Europe">Europe</option>
                        <option value = "North America">North America</option>
                        <option value = "South America">South America</option>
                        <option value = "Oceania">Oceania</option>
                    </select>
                    <select className="filter" defaulvalue={"default"} onChange={(e) => handleSortByName(e)}>
                        <option value="default" disabled>Sort by name</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
                    <select className="filter" defaultValue={"default"} onChange={(e) => handleSortByPopulation(e)}>
                        <option value="default" disabled>Sort by Population</option>
                        <option value="des">Higher Population</option>
                        <option value="asc">Lower Population</option>
                    </select>
                    <select className="filter" onChange = {e => handleFilterByActivity(e)}>
                        <option value = "All">Select Activity</option>
                        {allActivities?.map((e) => {
                            return (
                                <option value = {e.name}>{e.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="card-cont">
                    <div className="card-cont-2">
                    {
                        currentCountries?.map( el =>{
                            return(
                                <Link to={"/home/" + el.id }>
                                    <AllCard name={el.name} image={el.imgFlag}/>
                                </Link>
                            )
                        })
                    }
                    </div>
                </div>
                
                <div className="pagination">
                    
                    <Pagination
                    countriesPage={countriesPage} 
                    allCountries={allCountries.length} 
                    pagination={pagination}
                    />

                </div>
            </div>
        </div>
    )

}