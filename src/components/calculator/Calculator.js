import React, { useState } from "react";
import "./Calculator.css";

const SalaryCalculator = () => {
  const [price, setPrice] = useState("");
  const [itemClass, setItemClass] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (!price || !itemClass || !quantity) {
      alert("Please fill out all fields");
      return;
    }
    if (price < 0 || quantity < 1) {
      alert("Invalid! Price must be positive and quantity at least 1");
      return;
    }
    setItems([
      ...items,
      {
        itemClass,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        total: (parseFloat(price) * parseInt(quantity)).toFixed(2),
      },
    ]);
    setPrice("");
    setItemClass("");
    setQuantity("");
  };

  const grandTotal = items.reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2);

  const handleReset = () => {
    setPrice("");
    setItemClass("");
    setQuantity("");
    setItems([]);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>Clothing ATBP</h2>
        <div className="input-group">
          <label htmlFor="price-input">Price per Item (₱)</label>
          <input
            type="number"
            id="price-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
          />
        </div>
        <div className="input-group">
          <label htmlFor="class-input">Class of Item</label>
          <select
            id="class-input"
            value={itemClass}
            onChange={(e) => setItemClass(e.target.value)}
          >
            <option value="">Select class</option>
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
            <option value="Jacket">Jacket</option>
            <option value="Hat">Hat</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="quantity-input">Quantity</label>
          <input
            type="number"
            id="quantity-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>
        <div className="button-group">
          <button onClick={handleAddItem}>Add Item</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="output-group">
          <h3>Items List</h3>
          {items.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <table style={{ width: "100%", color: "#fff", marginTop: "10px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Class</th>
                  <th style={{ textAlign: "right" }}>Price (₱)</th>
                  <th style={{ textAlign: "right" }}>Quantity</th>
                  <th style={{ textAlign: "right" }}>Total (₱)</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.itemClass}</td>
                    <td style={{ textAlign: "right" }}>{item.price}</td>
                    <td style={{ textAlign: "right" }}>{item.quantity}</td>
                    <td style={{ textAlign: "right" }}>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <h3 style={{ marginTop: "20px" }}>Grand Total: ₱{grandTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
