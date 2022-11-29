import React from 'react'
import './Footer.css'
import iconCode from '../../Assets/code-svgrepo-com.svg'
import coffeIcon from '../../Assets/cup-svgrepo-com.svg'
import loveIcon from '../../Assets/heart-svgrepo-com.svg'
import reactIcon from '../../Assets/react-svgrepo-com.svg'

export const Footer = () => {
  return (
    <div className='footerDesign'>
        <div className="footerLeft">
            <p className='upper-text down-text'>Powered by MealDB</p>
            <p className='bottom-text down-text'>Proudly Built with <img className='reactIcon' src={reactIcon} alt="react"/></p>
        </div>
        <div className="footerRight">
            <p className='upper-text text-right'><img className='codeIcon' src={iconCode} alt="code" />by <a style={{textDecoration: 'none'}} href="https://github.com/inigobo" target="_blank">Iñigo Berganza</a></p>
            <p className='upper-text text-right'><img className='codeIcon' src={iconCode} alt="code" />by <a style={{textDecoration: 'none'}} href="https://github.com/Diogo-Merelles" target="_blank">Diogo Merelles</a></p>
            <p className='bottom-text text-right'>Made possible with <img className='coffeIcon' src={coffeIcon} alt="coffe" /> and <img className='loveIcon' src={loveIcon} alt="love" /></p>
        </div>
    </div>
  )
}

export default Footer;
