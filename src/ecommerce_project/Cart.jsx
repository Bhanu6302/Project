import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "./Action";

class Cart extends Component {
  render() {
    const { cart, removeFromCart } = this.props;

    return (
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
              <h4>{item.title}</h4>
              <img src={item.image} alt={item.title} style={{ width: "150px", height: "150px" }} />
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
