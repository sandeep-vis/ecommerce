
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import { ShoppingCart } from "lucide-react"; 

  


function Header() {
  const { state } = useCart();

  const totalCount = state.items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);


  return (
    <div className="p-4 flex justify-between items-center text-xl">
      <Link
        to="/"
        className="font-bold text-black bg-amber-300 border px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        Home
      </Link>

      <Link
        to="/cart"
        className="relative text-black bg-amber-300 border px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        <ShoppingCart className="inline w-6 h-6" />
        {totalCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
            {totalCount}
          </span>
        )}
      </Link>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
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
