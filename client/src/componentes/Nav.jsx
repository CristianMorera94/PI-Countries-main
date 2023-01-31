import React from 'react';
import { Link } from 'react-router-dom';
///import './NavBar.css'
import SearchBar from "./SearchBar.jsx"

export default function NavBar () {
    return (
        <div className = 'navContainer'>
            <div class="logo">
                <img className="Logo" src="" alt="img not foud" width="150px" height="100" />
            </div>
            <SearchBar/>
            <Link to = '/activities' className='navButton'>
                Create Activity
            </Link>       
        </div>
    )
}