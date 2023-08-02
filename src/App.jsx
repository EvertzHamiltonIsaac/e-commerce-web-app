import './App.css'
import './Resposive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaout from './components/common/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/blog/Blog';
import CompareProduct from './pages/CompareProducts'
import Wishlist from './pages/Wishlist';
import Login from "./pages/auth/Login";
import Forgotpassword from "./pages/auth/Forgotpassword";
import Signup from "./pages/auth/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/blog/SingleBlog";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPloicy from "./pages/policies/RefundPolicy";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import TermAndContions from "./pages/policies/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/orders/Checkout";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layaout />} >
          
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<SingleProduct />} />
a         <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="cart" element={<Cart />} /> 
          <Route path="checkout" element={<Checkout />} /> 
          <Route path="compare-product" element={<CompareProduct />} /> 
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPloicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="term-conditions" element={<TermAndContions />} /> 
          
        </Route>
         
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;