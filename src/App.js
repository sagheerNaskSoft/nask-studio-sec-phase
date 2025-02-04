import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import WeddingSets from './Pages/WeddingSets';
import ProductionService from './Pages/ProductionService';
import PropsPage from './Pages/PropsPage';
import RentalSpaces from './Pages/RentalSpaces';
import Contactus from './Pages/Contactus';

function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/wedding-sets' element={<WeddingSets />} />
        <Route path='/production-service' element={<ProductionService />} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/rental-spaces' element={<RentalSpaces />} />
        <Route path='/contact-us' element={<Contactus />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
