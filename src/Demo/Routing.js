import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Category from './Category';
import Listing from './Listing';
import ContactUs from './ContactUs';
import Apartments from './HOME/Apartments';
import Car from './HOME/Car';
import FoodLife from './HOME/FoodLife';
import Shopping from './HOME/Shopping';
import Traveling from './HOME/Traveling';

export default function Routing() {
  return (
    <div>
     <Navbar/>

      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Apartments" element={<Apartments />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/FoodLife" element={<FoodLife />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/Traveling" element={<Traveling />} />
       
      </Routes>
    </div>
  )
}
