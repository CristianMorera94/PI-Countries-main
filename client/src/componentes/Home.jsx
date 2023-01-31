import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {    getAllCountries, 
            filterByContinent,
            sortByLetter,           
        } from "../redux/actions/index"
import AllCard from "./AllCard";
import Pagination from "./pagination";
//import './styles/Home.css'
import NavBar from "./Nav";

export default function Home(){

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])

    const allCountries = useSelector((state) => state.countries);  
    
    const [currentPage, setCurrentPage] = useState(1)
    const [ countriesPage, setCountriesPage] = useState(9)///cantidad de personajes por pagina

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
        //handleSortByLetter(payload)
    }

    ///ordenar por orden alfabetico 
    function handleSortByLetter(e) {
        e.preventDefault();
        dispatch(sortByLetter(e.target.value));
        setCurrentPage(1);
        setSortLetter(`Sort ${e.target.value}`);
    }

    return(
        <div>
            <div className="cont-home">
                <NavBar/>
                <div className="cont-filter">
                    <select className = "filter" onChange={e => handleFilterByContinent(e)}>
                        <option value = "All">All</option>
                        <option value = "Africa">Africa</option>
                        <option value = "Antarctica">Antarctica</option>
                        <option value = "Asia">Asia</option>
                        <option value = "Europe">Europe</option>
                        <option value = "North America">North America</option>
                        <option value = "South America">South America</option>
                        <option value = "Oceania">Oceania</option>
                    </select>
                    <select className="filter" defaultValue={"default"} onChange={e => handleSortByLetter(e)}>
                        <option value="default" disabled>All</option>
                        <option value="asc">A-Z</option>
                        <option value="des">Z-A</option>
                    </select>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                    <select>
                        <option>a</option>
                        <option>b</option>
                        <option>c</option>
                    </select>
                </div>

                <div className="card-cont">
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

                <div className="pagination">
                    <button> Prev </button>
                    <Pagination 
                    countriesPage={countriesPage} 
                    allCountries={allCountries.length} 
                    pagination={pagination}
                    />
                    <button> Next</button>
                </div>

            </div>
        </div>
    )

}