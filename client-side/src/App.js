import ProductsPage from './pages/ProductsPage'
import AddProducts from './pages/AddProducts';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ViewProduct from './pages/ViewProduct';
import EditProducts from './pages/EditProducts';
import { useSelector, useDispatch } from 'react-redux'
import Login from './pages/login'


function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={!user ? <ProductsPage /> : <Navigate to='/login' />} />
        <Route path='/editproduct/:productId' element={!user ? <EditProducts /> : <Navigate to='/login' />} />
        <Route path="/addProducts" index element={!user ? <AddProducts /> : <Navigate to='/login' />} />
        <Route path=':productId' element={!user ? <ViewProduct /> : <Navigate to='/login' />} />
      </Routes>

    </div>
  );
}

export default App;
