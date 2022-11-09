import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

function Login() {
  return (
    <div>
      <Header />
        <div className='container-login'>
            <div className='box-login'>
                <form>
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-text">
                    <Icon.Envelope />
                  </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <label>Password</label>
                <div className="input-group">
                  <div className="input-group-text">
                    <Icon.Lock />
                  </div>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                    <button type="button" className="btn btn-primary">Login</button>
                    <a id="recover-pass" href='#'>Request new Password</a>
                </form>
            </div>
        </div>  
        <Footer />
        <AnimatedBackground />
    </div>
  )
}

export default Login