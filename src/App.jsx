// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';

const App = () => {
  return <div>
    <BrowserRouter>
    <UserStorage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>;
};

export default App;
