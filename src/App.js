import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Carosual from "./components/Slider/Slider";


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
