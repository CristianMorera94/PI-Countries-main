import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../redux/actions/index.js'

export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getCountry(name))
    }

    return (

        <div className = 'Search-bar-Container'>
            <input className='input'  
            type = "text" 
            placeholder = "Search country by name" 
            onChange={(e) => handInputChange(e)}>
            </input>
            <button className='buttonSearch' type = "submit"  onClick={(e) => handleSubmit(e)}>🔍</button>
        </div>
    )
}