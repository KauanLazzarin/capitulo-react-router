import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation/Navigation.jsx';
import Products from './Components/Products/Products.jsx';
import About from './Components/About/About.jsx';

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
        <Route path="about" element={<About />}/>
      </Routes>

    
    </BrowserRouter>
  );
}
