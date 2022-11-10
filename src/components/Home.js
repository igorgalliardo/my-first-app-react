import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

function Home() {
  return (
    <div>
        <Header />
        <div className="context">
            <h1>Welcome</h1>
        </div>
        <AnimatedBackground />
        <Footer />
    </div>
  )
}

export default Home