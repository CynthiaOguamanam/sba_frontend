import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './Components/Landingpage/Landingpage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
