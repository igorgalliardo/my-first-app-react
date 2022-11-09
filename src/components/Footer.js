import React from 'react'

function mouseInside(){
    document.querySelector('img').src='image/git-2.png'
}
function mouseOutside(){
    document.querySelector('img').src='image/git-1.png'
}

function Footer() {
  return (
    <div>
        <div className='footer'>
            Developed and maintaned by: Igor Galliardo | My first project with React
            <a href='https://github.com/igorgalliardo' target="_blank"><img id='image' src='image/git-1.png' onMouseOver={mouseInside} onMouseOut={mouseOutside}/></a>
        </div>
    </div>
  )
}

export default Footer