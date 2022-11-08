
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, deleteProducts } from '../API/API';
import Header from '../components/header/header';
import { selectAllproducts } from '../redux/features/products/productsSlice';
import Styles from './ProductsPage.module.css'
import { Link } from "react-router-dom";
import background from '../images/background.png'



const ProductsList = () =>{

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts())}, [dispatch]);


    const {data} = useSelector(selectAllproducts)
    //const orderedProducts = products.slice().sort((a,b) => b.date.localeCompare(a.date))
     
    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this?")) {
            dispatch(deleteProducts(id));
        }
        
    }
    
    return (
        <div className='text-center'>
            <img className={Styles.img_background} src={background}></img>
            <Header/>
            <Link  to='/addProducts' ><button className={Styles.adicionar} >Adicionar Produto</button></Link>
            <div className={Styles.container}>
            
                <table className='text-center table-resp'>
                
                    <thead className={Styles.thead}>
                    <tr>
                        <th className='th'>Marca</th>
                        <th className='th'>Preco</th>
                        <th className='th'>Foto</th>
                        <th className='th'>#</th>
                        
                    </tr>
                    </thead>
                    <tbody className={Styles.tbody}> 
                    {data.map((item) =>(
                        <tr key={item._id}>
                            
                            <td data-label='MARCA:' className={Styles.td}>{item.marca}</td>
                            <td data-label='PRECO:' className={Styles.td}>{item.preco}</td>
                            <td data-label='FOTO:' className={Styles.td}>{item.foto.slice(0,15)}</td>
                            <td className={Styles.tbutton}>
                                <button className={Styles.editar}>Editar</button>
                                <button className={Styles.ver}>Ver</button>
                                <button className={Styles.excluir} onClick={() => handleDelete(item._id)}>Excluir</button>
                                
                            </td>
                        </tr>
                    ))}
                            
                       
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default ProductsList;    