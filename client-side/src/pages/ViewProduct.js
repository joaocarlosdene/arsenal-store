import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getProducts, deleteProducts } from '../API/API';
import { useEffect } from 'react';
import { selectAllproducts, selectProductById } from '../redux/features/products/productsSlice'
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
  //const {_id} = useSelector(selectProductById)
  //console.log(productId)
  //  const Products = useSelector((state) => selectAllproducts (state, Number (productId)))



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