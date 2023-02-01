import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css'

export default function NavBar () {
    return (
        <div className = 'navContainer'>
            <Link to = '/activities' className='createButton'>
                Create Activity
            </Link>       
        </div>
    )
}