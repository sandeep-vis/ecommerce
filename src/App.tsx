import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="p-4  flex justify-between text-xl hover:text-green-900 transition-colors duration-200">
          <a
            href="/"
            className="font-bold text-black bg-amber-300 border px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-200"
          >
            <Link to="/">Home</Link>
          </a>

          <a
            href="/"
            className="font-bold text-black bg-amber-300 border  px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-200"
          >
            <Link to="/cart">Cart</Link>
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
