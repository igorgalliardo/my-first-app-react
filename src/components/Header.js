import React from 'react'

function Header() {
  return (
    <div>
        <div className='header-login'>
            <div className='title-header'>
                <h1>Scratch</h1>
            </div>
            <div className='access-header'>
                <scan className="singup-link"><a href="#">Singup</a></scan>
                <scan className="login-link"><a href="#">Login</a></scan>
            </div>
        </div>
    </div>
  )
}

export default Header