import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Footer,
  Header,
  Contact,
  Login,
  Register,
  Reset,
  Cart,
  Admin,
} from "../src/pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                {" "}
                <Admin />{" "}
              </AdminOnlyRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
