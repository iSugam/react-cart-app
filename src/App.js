import './App.css';
import Header from './components/Navbar/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Cart from './components/pages/Cart';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
