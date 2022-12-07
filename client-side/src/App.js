import ProductsPage from './pages/ProductsPage'
import AddProducts from './pages/AddProducts';
import { Route, Routes } from "react-router-dom";
import ViewProduct from './pages/ViewProduct';
import EditProducts from './pages/EditProducts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path='/editproduct/:productId' element={<EditProducts/>}/>
        <Route path="/addProducts">
          <Route index element={<AddProducts />} />
          <Route path=':productId' element={<ViewProduct />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
