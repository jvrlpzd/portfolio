import React from 'react'
import './header.css'


const CTA = () => {
  return (
    <div className="cta">
        <a href="https://drive.google.com/file/d/1WtsnPJDYbCaGqhZk6GsZV3LQ6xi9cLV6/view?usp=sharing" target="_blank" download className='btn btn-primary'>Télécharger CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA