import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import Styles from './EditProducts.module.css'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { updateProducts } from '../API/API';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import Header from '../components/header/header';
import background from '../images/background.png'
import { useParams } from 'react-router-dom'
import { selectAllproducts} from '../redux/features/products/productsSlice'

const EditProducts = () => {
 
    const navigate = useNavigate();
    const { productId } = useParams()
    const { data } = useSelector(selectAllproducts)

    const eachProduct = data.filter(item => item._id === productId)

    
    const [marca, setMarca] = useState(eachProduct[0].marca)
    const [preco, setPreco] = useState(eachProduct[0].preco)
    const [foto, setFoto] = useState(eachProduct[0].foto)
    
    const onMarcaChanged = e => setMarca(e.target.value)
    const onPrecoChanged = e => setPreco(e.target.value)
    const onFotoChanged = e => setFoto(e.target.value)

    const dispatch = useDispatch();
    
    const [postData, setPostData] = useState({
      _id: productId,
      marca: eachProduct[0].marca,
      preco:eachProduct[0].preco,
      foto: eachProduct[0].foto
  })

    const canSave = Boolean(marca) && Boolean(preco) && Boolean(foto)
    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(updateProducts(postData))
      navigate('/')
      window.location.reload();
    }
  return (
    <div className='text-center'>
    <img className={Styles.img_background} src={background}></img>
    <Header/>
    <form className={Styles.formulario} onSubmit={handleSubmit}>
      <FloatingLabel
          controlId="floatingInput"
          
          className="mb-3"
        >
       <div>
        <Form.Control className={Styles.input} type='text' required name='marca' placeholder='MARCA:' placeho="true"  value={postData.marca} onChange={(e) => setPostData({ ...postData, marca: e.target.value })}/>
        </div>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          className="mb-3"
        >
       <div>
        <Form.Control className={Styles.input} type='text' required name='preco' label='PRECO' placeholder='PRECO:' placeho="true"  value={postData.preco} onChange={(e) => setPostData({ ...postData, preco: e.target.value })}/>
        </div>
        </FloatingLabel>
       <div className={Styles.img_file}>
       <FileBase
        type='file'
        multiple={false}
        value={postData.foto}
        onDone={({ base64 }) => setPostData({ ...postData, foto: base64 })}
        required
        />
       </div>
       <div className='justify-content-center'>

       <button className={Styles.enviar} type="submit" to='/' value="Enviar" disabled={!canSave}>Enviar</button>
       </div>
       <div className='justify-content-center'>

       <Link  to='/' ><button className={Styles.cancelar} >Cancelar</button></Link>
       </div>
    </form>
    </div>
  )
}

export default EditProducts