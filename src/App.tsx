import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/Landing.page";
import Women from "./pages/Women.page";
import Men from "./pages/Men.page";
import HomeWomen from "./pages/HomeWomen.page";
import ClothesWomen from "./pages/ClothesWomen.page";
import ShoesWomen from "./pages/ShoesWomen.page";



const App = () => {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/women" element={<Women />} >
        <Route path="home" element={<HomeWomen />} />
        <Route path="women-clothes" element={<ClothesWomen />} />
        <Route path="women-shoes" element={<ShoesWomen />} />
      </Route>
      <Route path="/men" element={<Men />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
