import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/statics/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';


function App() {
  return (
   <Router>
    <Navbar />
    <div style={{minHeight: '100vh'}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
        <Route path='/temas' element={<ListaTema />}/>
        <Route path='/posts' element={<ListaPostagem />}/>
      </Routes>
    </div>
    <Footer />
   </Router>
  );
}

export default App;
