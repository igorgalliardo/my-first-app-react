import React from 'react'

function Login() {
  return (
    <div>
        <div className='container-login'>
            <div className='box-login'>
                <form>
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    <label>Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
                    <button type="button" class="btn btn-primary">Login</button>
                    <a href='#'>Request new Password</a>
                </form>
            </div>
        </div>  
    </div>
  )
}

export default Login