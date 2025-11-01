import React, { useEffect, useState } from "react";
import "./App.css";

export default function ProductStore() {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
        setSorted(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Sort products
  useEffect(() => {
    let list = [...products];
    if (sortOption === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortOption === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortOption === "title") list.sort((a, b) => a.title.localeCompare(b.title));
    setSorted(list);
  }, [sortOption, products]);

  // Add to cart + persist in localStorage
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      let updated;
      if (exists) {
        updated = prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        updated = [...prev, { ...product, qty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="app-container">
      <h1> Product Store</h1>

      <div className="toolbar">
        <div className="cart-info">
          🛒 <span>{totalItems}</span> items
        </div>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="none">Sort by...</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="title">Title (A–Z)</option>
        </select>
      </div>

      <div className="grid1">
        {sorted.map((p) => (
          <div key={p.id} className="card1">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="price">${p.price.toFixed(2)}</p>
             {cart.find((item) => item.id === p.id) ? (
              <button
                className="remove"
                onClick={() => handleRemoveFromCart(p.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
