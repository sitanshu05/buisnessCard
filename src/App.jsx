import React from 'react'
import ReactDOM from 'react-dom/client'
import Basic from "../components/Basic";
import About from '../components/About';
import Intrests from '../components/Intrests';
import Footer from '../components/Footer';

export default function App(){
  return(
    <div className="main">
      <Basic/>
      <About/>
      <Intrests />
      <Footer />
    </div>
  )
}