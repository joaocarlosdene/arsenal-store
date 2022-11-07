import React from 'react'
import Styles from './header.module.css'
import Logo from '../../images/logo.jpeg'

const Header = () => {
  return (
    <div>
    <img className={Styles.logo} src={Logo}/>
    <div className={Styles.title}><h1 >ARSENAL STORE</h1></div>
    <p className={Styles.insta}>@arsenalstore</p>
    </div>
  )
}

export default Header