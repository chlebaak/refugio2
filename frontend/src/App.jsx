
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Restaurace from './pages/Restaurace';
import Ubytovani from './pages/Ubytovani';
import Shop from './pages/Shop';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';






function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurace" element={<Restaurace />} />
          <Route path="/ubytovani" element={<Ubytovani />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
