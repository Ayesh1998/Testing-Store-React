import React from "react";
import "./cart-item-styles.css";
import { removeItemFromCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item: { url, pricenow, name }, item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item" style={{ fontSize: "11px" }}>
      <img src={url} alt="imag" style={{ width: "20%" }} />
      <div className="item-details">
        <div className="row" style={{ width: "100%", margin: "auto" }}>
          <div className="col-4">
            <span className="name" style={{ fontSize: "11px" }}>
              {name}
            </span>
          </div>
          <div className="col-4"></div>
          <div
            className="col-4"
            style={{ fontSize: "11px" }}
            onClick={() => dispatch(removeItemFromCart(item))}
          >
            <FaTrashAlt
              style={{
                fontSize: "13px",

                color: "#28a745",
              }}
            />
          </div>
        </div>
        <div className="row" style={{ width: "80%", margin: "auto" }}>
          <div className="col-4">
            <span className="name" style={{ fontSize: "11px" }}>
              Qty: 1
            </span>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
            <span
              className="price"
              style={{ fontSize: "11px", color: "#28a745" }}
            >
              ${pricenow}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
