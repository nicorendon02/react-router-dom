import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HeaderCV from './components/navbar/index.js';
import HomeCV from './components/home';
import AboutCV from './components/about';
import InterestsCV from './components/interests';
import ContactCV from './components/contact'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
            <HeaderCV/>
              <Routes>
                <Route path="/" element={<HomeCV/>}/>
                <Route path="/home" element={<HomeCV/>}/>
                <Route path="/about" element={<AboutCV />}/>
                <Route path="/interests" element={<InterestsCV/>}/>
                <Route path="/contact" element={<ContactCV 
                  nameOne="Aurelia Martinez"
                  nameTwo="aurimar@mail.com"
                  nameThree="Quiero trabajar con ustedes :D!"
                />}/> 
              </Routes>
    </BrowserRouter>
  );
}

export default App;
