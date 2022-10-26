
import {useSelector} from 'react-redux';
import { sellectAllProducts } from '../redux/features/products/productsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../API/API';
import Form from '../components/form/form';

const ProductsList = () =>{

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts())}, []);

    const products = useSelector((state) => state.products)

    return (
        <div>
            <Form/>
            {JSON.stringify(products.data)}
        </div>
    )
}

export default ProductsList;