import "./App.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Importing -- Pages --
import Nav from "./components/nav/Nav";
import LandingPage from "./pages/Landing.page";
import Women from "./pages/Women.page";
import Clothes from "./pages/Clothes";
import Jackets from "./pages/Jackets";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Suits from "./pages/Suits";
import Dress from "./pages/Dress";
import Men from "./pages/Men.page";
import ClothesWomen from "./pages/ClothesWomen.page";
import ShoesWomen from "./pages/ShoesWomen.page";
import StoriesPage from "./pages/Stories.page";
import Cartpage from "./pages/Cart.page";
import SingleproductPage from "./pages/Singleproduct.page";
import NotFound from "./pages/NotFound.page";
//import Footer from "./components/footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<LandingPage />} />
      <Route path="women" element={<Women />} />
      <Route path="women-clothes" element={<ClothesWomen />}>
        <Route path="clothes" element={<Clothes />} />
        <Route path="jackets" element={<Jackets />} />
        <Route path="shirts" element={<Shirts />} />
        <Route path="pants" element={<Pants />} />
        <Route path="suits" element={<Suits />} />
        <Route path="dress" element={<Dress />} />
      </Route>

      <Route path="women-shoes" element={<ShoesWomen />}></Route>
      <Route path="women-stories" element={<StoriesPage />} />

      <Route path="men" element={<Men />}></Route>
      <Route path="cart" element={<Cartpage />} />


      <Route path="single-product/:_id" element={<SingleproductPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
