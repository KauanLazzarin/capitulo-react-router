import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation.jsx';
import Products from './Components/Products/Products.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Product from "./Components/Product/Product.jsx";

/* 
  lista de produtos:
  

  cada produto especifico:
  https:/ranekapi.origamid.dev/json/api/produto/:id
*/

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/products/:id/*" element={<Product />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>

    
    </BrowserRouter>
  );
}
