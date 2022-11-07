import Form from '../components/form/form';
import Header from '../components/header/header';
import Styles from './Addproducts.module.css'
import background from '../images/background.png'

import React from 'react'

const AddProducts = () => {
  return (
    <div className='text-center'>
      <img className={Styles.img_background} src={background}></img>
    <Header/>
    <Form/>
    </div>
  )
}

export default AddProducts