import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Home, Footer, Header, Contact, Login, Register, Reset, Cart} from "../src/pages/index"

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<Reset />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
     <Footer />
     </BrowserRouter>
    </>

  );
}

export default App;
