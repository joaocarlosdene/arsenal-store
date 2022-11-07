import ProductsPage from './pages/ProductsPage'
import AddProducts from './pages/AddProducts';
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/addProducts" element={<AddProducts/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
