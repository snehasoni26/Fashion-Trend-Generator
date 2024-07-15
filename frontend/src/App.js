import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import CatalogPage from './components/CataloguePage';
import { SignupPage } from './components/SignupPage';
import { ImageGenerator } from './components/ImageGenerator';
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element={<HomePage/>} />
      <Route path = "/login" element={<LoginPage/>} />
      <Route path = "/explore" element={<CatalogPage/>} />
      <Route path = "/signup" element={<SignupPage/>} />
      <Route path = "/generate" element={<ImageGenerator/>} />
      </Routes>
    </Router>
  
  )
}

export default App;
