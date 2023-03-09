import "src/App.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom;'
import Home from "src/page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
