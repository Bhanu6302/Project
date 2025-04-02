import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ecommerce_project/Header";
import ProductList from "./ecommerce_project/Product";
import Cart from "./ecommerce_project/Cart";
import NotFound from "./ecommerce_project/Notfound";
import "./index.css";
import { Provider } from "react-redux";
import store from "./ecommerce_project/Store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
