import React from "react";
import "./styles/pagination.css"

export default function pagination({ countriesPage, allCountries, pagination }){
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(allCountries/countriesPage); i++) {
        pageNumber.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {
                    pageNumber && pageNumber.map( number =>{
                        return(
                        <li key={number}>
                            <button className="btnPageNumber" onClick={() => pagination(number)}>
                                {number}
                            </button>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}