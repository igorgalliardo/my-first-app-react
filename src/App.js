import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Singup from './components/Singup';
import Country from './components/Country';
import AnimatedBackground from './components/AnimatedBackground';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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