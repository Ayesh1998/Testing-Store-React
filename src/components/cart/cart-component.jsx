import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item-component";
import "./cart-styles.css";
import { FaRegHourglass, FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);

  var total = 0;
  cartItems.forEach((item) => {
    total += item.pricenow;
  });
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              className="imageincart"
              style={{}}
              src="data:image/png;base64,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"
              alt=""
            />
            <span
              className="red-text empty-cart"
              style={{
                fontSize: "15px",
                color: "red",
                fontWeight: "600",
                fontFamily: "Lemonada",
                display: "block",
              }}
            >
              Cart is Empty
            </span>
            <p
              style={{
                fontSize: "15px",
                color: "grey",
                fontWeight: "600",
                fontFamily: "Lemonada",

                display: "block",
              }}
            >
              Add items to your cart
            </p>
          </div>
        )}
      </div>
      {cartItems.length ? (
        <div>
          <div className="row" style={{ marginTop: "5px" }}>
            <span className="col-6" style={{ fontSize: "11px" }}>
              Subtotal({cartItems.length})
            </span>
            <span className="col-6" style={{ fontSize: "11px", color: "red" }}>
              ${total}
            </span>
          </div>
          <div
            className="container ccbottom_border"
            style={{ margin: "10px 0px", borderColor: "grey" }}
          />
          <div className="row" style={{ marginTop: "5px" }}>
            <span className="col-6" style={{ fontSize: "11px" }}>
              Discount
            </span>
            <span className="col-6" style={{ fontSize: "11px" }}>
              0
            </span>
          </div>
          <div
            className="container ccbottom_border"
            style={{ margin: "10px 0px", borderColor: "grey" }}
          />

          <div className="row" style={{ marginTop: "5px" }}>
            <span className="col-6" style={{ fontSize: "11px" }}>
              Est.Total
            </span>
            <span className="col-6" style={{ fontSize: "11px", color: "red" }}>
              ${total}
            </span>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div
              className="col-4"
              style={{
                cursor: "pointer",
                color: "white",
                textAlign: "center",
                fontSize: "11px",
                fontWeight: "600",
                backgroundColor: "#28a745",
                borderRadius: "17px",
                padding: "3px",
              }}
            >
              Go to checkout
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
