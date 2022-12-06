import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import LandingPage from "./pages/Landing.page";
import Women from "./pages/Women.page";
import Men from "./pages/Men.page";
import ClothesWomen from "./pages/ClothesWomen.page";
import ShoesWomen from "./pages/ShoesWomen.page";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women-clothes" element={<ClothesWomen />} />
        <Route path="/women-shoes" element={<ShoesWomen />} />

        <Route path="/men" element={<Men />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
