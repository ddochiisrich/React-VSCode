import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import BoardListPage from './pages/BoardListPage.js';
import BoardDetailPage from './pages/BoardDetailPage.js';
import BoardWriteFormPage from './pages/BoardWriteFormPage.js';
import BoardUpdateFormPage from './pages/BoardUpdateFormPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <BoardListPage /> } />
          <Route path="/boardList" element={< BoardListPage />} />
          <Route path="/boardDetail" element={< BoardDetailPage />} />
          <Route path="/boardWrite" element={< BoardWriteFormPage />} />
          <Route path="/boardUpdate" element={< BoardUpdateFormPage />} />
          <Route path="/*" element={< NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}
export default App;