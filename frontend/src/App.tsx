import './App.css';
import { CartProvider } from './context/CartContext';
import BuyPage from './pages/BuyPage';
import CartPage from './pages/CartPage';
import ProjectsPage from './pages/ProjectsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Welcome from './Welcome';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="/buy/:title/:bokId/:price" element={<BuyPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
