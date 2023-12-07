import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'; 


import Aos from 'aos';
import "aos/dist/aos.css";
import React  from 'react';
import { Routes,Route } from "react-router-dom";

import Home from './Component/Home'; 
import About from './Component/About'; 
import Service from './Component/Service'; 
import Skills from './Component/Skills'; 
import LatestProject from './Component/LatestProject'; 
import Contact from './Component/Contact'; 


function App() {
// useEffect(()=> {

//   Aos.init();
// },[]);
  return (
 <>
 
 <Header />
 {/* <Home/>
 <About />
 <Service />
 <Skills />
 <LatestProject />
 <Contact /> */}

<Routes>


<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Service" element={<Service />} />
<Route path="/Skills" element={<Skills />} />
<Route path="/LatestProject" element={<LatestProject />} />
<Route path="/Contact" element={<Contact />} />


</Routes>

</>
  );
}

export default App;




