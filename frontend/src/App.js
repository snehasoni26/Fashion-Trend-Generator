import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import CatalogPage from './components/CataloguePage';
import { SignupPage } from './components/SignupPage';
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element={<HomePage/>} />
      <Route path = "/login" element={<LoginPage/>} />
      <Route path = "/explore" element={<CatalogPage/>} />
      <Route path = "/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  
  )
}

export default App;
