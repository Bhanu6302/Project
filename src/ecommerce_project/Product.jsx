import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Action";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px" }} />
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
