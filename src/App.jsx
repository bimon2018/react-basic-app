import "src/App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "src/pages/Home";
import ProductPage from "src/pages/Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/product/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
