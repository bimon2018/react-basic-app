import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from "src/pages/Home";
import ProductPage from "src/pages/Product";
import { store } from "src/store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/product/:id' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
