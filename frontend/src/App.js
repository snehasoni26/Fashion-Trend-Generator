import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element={<HomePage/>} />
      <Route path = "/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  
  )
}

export default App;
