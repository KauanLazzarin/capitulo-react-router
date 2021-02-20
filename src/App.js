import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import PageButton from './PageButton.js';
import About from './About.js';
import Header from './Header.js';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>


      <PageButton path="/">Home</PageButton>
      <PageButton path="about">Sobre</PageButton>
    </BrowserRouter>
  );
};