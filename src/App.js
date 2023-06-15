import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landingpage from './Components/Landingpage/Landingpage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Support from './Components/Support/Support';
import About from './Components/Company/About';
import FAQ from './Components/Support/Faq';
import Howreg from './Components/Support/Howreg';
import Sendrequest from './Components/Support/Sendrequest';
import GrantPackages from './Components/GrantPackages/Grantpackages';
import FormJs from './Components/Form/Form';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/grantpackages" element={<GrantPackages/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/faqdet" element={<FAQ/>}/>
        <Route path="/sendrequest" element={<Sendrequest/>}/>
        <Route path="/howreg" element={<Howreg/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<FormJs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
