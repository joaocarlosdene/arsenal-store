import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getProducts} from '../API/API';
import { useEffect } from 'react';
import { selectAllproducts} from '../redux/features/products/productsSlice'
import { useParams } from 'react-router-dom'
import Styles from './ViewProduct.module.css'
import { Link } from 'react-router-dom';
import background from '../images/background.png'


import React from 'react'
import Header from '../components/header/header';

const ViewProduct = () => {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getProducts()) }, [dispatch]);

  const { data } = useSelector(selectAllproducts)
  const { productId } = useParams()
  




  return (
    <div className={Styles.container}>
      <Header/>
      <img className={Styles.img_background} src={background}></img>
      {data.map((item) => (item._id === productId ?
        <div key={item._id}>
          <img className={Styles.imagem} src={item.foto}></img>
          <p className={Styles.produto}>{item.marca}<br />
            {item.preco}</p>
        </div> : ""))}
          <Link to='/' ><button className={Styles.cancelar} >Voltar</button></Link>

    </div>
  )
}

export default ViewProduct