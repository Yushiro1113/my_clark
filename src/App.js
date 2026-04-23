
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Footer from './components/footer/Footer';



export default function App() {
  return (
    <div className="app-container">
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}