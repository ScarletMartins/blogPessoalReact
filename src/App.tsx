import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
    <Navbar />
    <div style={{minHeight: '100vh'}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        {/*<Route path='/cadastro' element={<CadastroUsuario />}/>*/}
      </Routes>
    </div>
    <Footer />
   </Router>
  );
}

export default App;
