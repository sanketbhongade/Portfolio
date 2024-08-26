import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Component/Navbar/Navbar";
import Home from "../src/Component/Home/Home";
import Project from "../src/Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Services from './Component/Services/Services';
import Resume from './Component/Resume/Resume';

const App=()=>{
  return(
    <>
      <Router>
        <Navbar/>
          <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            <Route path="/service" element={<Services/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
          </Routes>
      </Router>
      
    </>
  )
}

export default App;