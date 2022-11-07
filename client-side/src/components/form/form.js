import React, {useState} from 'react'
import Styles from './form.module.css'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { postProducts } from '../../API/API';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';





const Formulario = () => {

    

    const [postData, setPostData] = useState({
        marca:'',
        preco:'',
        foto:''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(postProducts(postData))
    }
  return (
    <div className='d-flex justify-content-center'>
    <form className={Styles.formulario} onSubmit={handleSubmit}>
      <FloatingLabel
          controlId="floatingInput"
          
          className="mb-3"
        >
       <div>
        <Form.Control className={Styles.input} type='text' name='marca' placeholder='MARCA:' placeho="true"  value={postData.marca} onChange={(e) => setPostData({...postData, marca: e.target.value})}/>
        </div>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          className="mb-3"
        >
       <div>
        <Form.Control className={Styles.input} type='text' name='preco' label='PRECO' placeholder='PRECO:' placeho="true"  value={postData.preco} onChange={(e) => setPostData({...postData, preco: e.target.value})}/>
        </div>
        </FloatingLabel>
       <div className={Styles.img_file}>
       <FileBase
        type='file'
        multiple={false}
        onDone={({base64}) => setPostData({...postData, foto: base64})}
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

export default Formulario;