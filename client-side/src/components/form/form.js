import React, {useState} from 'react'
import Styles from './form.module.css'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { postProducts } from '../../API/API';



const Form = () => {

    const reload = async () => {
      await window.location.reload();
    }

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
    <form className='text-center' onSubmit={handleSubmit}>
       <input className={Styles.input} type='text' name='marca' label='Marca' placeholder='Marca'  value={postData.marca} onChange={(e) => setPostData({...postData, marca: e.target.value})}></input>
       <input className={Styles.input} type='text' name='preco' label='Preco' placeholder='Preco'  value={postData.preco} onChange={(e) => setPostData({...postData, preco: e.target.value})}></input>
       <FileBase
        type='file'
        multiple={false}
        onDone={({base64}) => setPostData({...postData, foto: base64})}
        />
       
       <div className='justify-content-center'>

       <button className={Styles.enviar} type="submit" onClick={reload} value="Enviar">Enviar</button>
       </div>


    </form>
  )
}

export default Form;