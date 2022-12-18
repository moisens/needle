import "./App.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/nav/Nav";
import LandingPage from "./pages/Landing.page";
import Women from "./pages/Women.page";
import Jackets from "./pages/Jackets";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Suits from "./pages/Suits";
import Dress from "./pages/Dress";
import Men from "./pages/Men.page";
import ClothesWomen from "./pages/ClothesWomen.page";
import ShoesWomen from "./pages/ShoesWomen.page";
import SingleproductPage from "./pages/Singleproduct.page";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />}>
         <Route index element={<LandingPage />} />
        <Route path="women" element={<Women />} />
        <Route path="women-clothes" element={<ClothesWomen />}>
          <Route path="jackets" element={<Jackets />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="pants" element={<Pants />} />
          <Route path="suits" element={<Suits />} />
          <Route path="dress" element={<Dress />} />
        </Route>
        <Route path="women-shoes" element={<ShoesWomen />} />
        <Route path="men" element={<Men />}></Route>
        <Route path="/single-product/:id" element={<SingleproductPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

/*

<BrowserRouter>
       <Nav />
       <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/women" element={<Women />} />
         <Route path="/women-clothes" element={<ClothesWomen />} />
         <Route path="/women-shoes" element={<ShoesWomen />} />

         <Route path="/men" element={<Men />}></Route>

         <Route path="/single-product/:id" element={<SingleproductPage />} />
       </Routes>
       <Footer />
     </BrowserRouter>


      <Route path="jackets" element={<Jackets />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="pants" element={<Pants />} />
          <Route path="suits" element={<Suits />} />
          <Route path="dress" element={<Dress />} /> 

*/
