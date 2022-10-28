
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../API/API';
import Form from '../components/form/form';
import { selectAllproducts } from '../redux/features/products/productsSlice';
import './ProductsPage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductsList = () =>{

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts())}, [dispatch]);


    const {data} = useSelector(selectAllproducts)
    //const orderedProducts = products.slice().sort((a,b) => b.date.localeCompare(a.date))
     
    console.log(data)
    
    return (
        <div className='container'>
            <Form/>
            
                <table className='text-center table-resp'>
                    <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Preco</th>
                        <th>Foto</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='td'>{data.map((item) =>(<p key={item._id} >{item.marca}</p>))}</td>
                            <td className='td'>{data.map((item) =>(<p key={item._id} >{item.preco}</p>))}</td>
                            <td className='td'>{data.map((item) =>(<p key={item._id} >{item.foto.slice(0,15)}</p>))} </td>
                            <td className='tda'>{data.map((item) =>(<p className='link' key={item._id} ><a>Editar</a></p>))}</td>
                            <td className='tda'>{data.map((item) =>(<p className='link' key={item._id} ><a>Excluir</a></p>))}</td>  
                        </tr>
                    </tbody>
                </table>
            
        </div>
    )
}

export default ProductsList;    