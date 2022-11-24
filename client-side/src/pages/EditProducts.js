import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import Styles from './EditProducts.module.css'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { postProducts } from '../API/API';
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

    const [marca, setMarca] = useState(data.marca)
    const [preco, setPreco] = useState(data.preco)
    const [foto, setFoto] = useState(data.foto)
    
    const onMarcaChanged = e => setMarca(e.target.value)
    const onPrecoChanged = e => setPreco(e.target.value)
    const onFotoChanged = e => setFoto(e.target.value)

    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        marca:'',
        preco:'',
        foto:''
    })


    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(postProducts(postData))
        navigate("/")
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
        <Form.Control className={Styles.input} type='text' required name='marca' placeholder='MARCA:' placeho="true"  value={marca} onChange={onMarcaChanged}/>
        </div>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          className="mb-3"
        >
       <div>
        <Form.Control className={Styles.input} type='text' required name='preco' label='PRECO' placeholder='PRECO:' placeho="true"  value={postData.preco} onChange={onPrecoChanged}/>
        </div>
        </FloatingLabel>
       <div className={Styles.img_file}>
       <FileBase
        type='file'
        multiple={false}
        onDone={({base64}) => setPostData({...postData, foto: base64})}
        required
        />
       </div>
       <div className='justify-content-center'>

       <button className={Styles.enviar} type="submit" to='/' value="Enviar">Enviar</button>
       </div>
       <div className='justify-content-center'>

       <Link  to='/' ><button className={Styles.cancelar} >Cancelar</button></Link>
       </div>
    </form>
    </div>
  )
}

export default EditProducts