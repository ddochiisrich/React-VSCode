import './App.css';

import { useState, useEffect } from 'react';

import BoardListPage from './pages/BoardListPage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  
  return (
    <div className="container">
      <Header />
      <BoardListPage />
      <Footer />
    </div>
  );
}

export default App;
