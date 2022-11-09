import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Singup from './components/Singup';
import Footer from './components/Footer';
import Country from './components/Country';
import AnimatedBackground from './components/AnimatedBackground';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Singup" element={<Singup />} />
      <Route exact path="/Country" element={<Country />} />
      <Route exact path="/AnimatedBackground" element={<AnimatedBackground />} />
    </Routes>
  </Router>
  );
}

export default App;