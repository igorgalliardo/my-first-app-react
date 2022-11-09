import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Country from './Country'
import AnimatedBackground from './AnimatedBackground'

function FixFooter(){
    const Footer = document.querySelector('.footer')
    Footer.style.bottom=0
    Footer.style.position="fixed"
}

function Singup() {
  return (
    <div>
        <Header />
        <div className='container-singup'>
            <div className='title-singup'><h1>Signup new User</h1></div>
            <div className='form-singup'>
                <form class="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-4">
                        <Country />    
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Type your state name Eg: Illinois" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Agree with terms.
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                    </form>
                </div>
        </div>
        <Footer />
        <AnimatedBackground />
    </div>
  )
}

export default Singup