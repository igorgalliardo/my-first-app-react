import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import Header from './Header'
import Footer from './Footer'

function Login() {
  return (
    <div>
      <Header />
        <div className='container-login'>
            <div className='box-login'>
                <form>
                <label>Email</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <Icon.Envelope />
                  </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <label>Password</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <Icon.Lock />
                  </div>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                    <button type="button" class="btn btn-primary">Login</button>
                    <a href='#'>Request new Password</a>
                </form>
            </div>
        </div>  
        <Footer />
    </div>
  )
}

export default Login