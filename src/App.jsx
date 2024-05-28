import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
