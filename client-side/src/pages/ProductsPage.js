
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../API/API';
import Form from '../components/form/form';
import { selectAllproducts } from '../redux/features/products/productsSlice';


const ProductsList = () =>{

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts())}, []);


    const {data, loading} = useSelector(selectAllproducts)
    //const orderedProducts = products.slice().sort((a,b) => b.date.localeCompare(a.date))
     
    console.log(data)
    
    return (
        <div>
            <Form/>
            {data.map((item) =>(
                <h2 key={item._id} >{item.marca}</h2>
            ))}
        </div>
    )
}

export default ProductsList;    