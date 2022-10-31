import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
   <>
    <Navbar />
     <Home />
    <Footer />
   </>
  );
}

export default App;
