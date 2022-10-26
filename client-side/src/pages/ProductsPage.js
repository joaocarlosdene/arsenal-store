
import {useSelector} from 'react-redux';
import { sellectAllProducts } from '../redux/features/products/productsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getProducts from '../API/API';

const ProductsList = () =>{

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts())}, []);

    const products = useSelector((state) => state.products)

    return (
        <div>
            {JSON.stringify(products)}
        </div>
    )
}

export default ProductsList;