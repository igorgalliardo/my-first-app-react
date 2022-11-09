import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <div className='header-login'>
            <div className='title-header'>
                <h1><Link to="/">Scratch</Link></h1>
            </div>
            <div className='access-header'>
                <scan className="singup-link"><Link to="/Singup">Singup</Link></scan>
                <scan className="login-link"><Link to="/Login">Login</Link></scan>
            </div>
        </div>
    </div>
  )
}

export default Header