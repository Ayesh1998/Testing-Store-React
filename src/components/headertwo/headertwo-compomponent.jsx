import React from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown } from "../../redux/actions";
import Cart from "../cart/cart-component";
import "./headertwo-styles.css";

const HeaderTwo = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems);
  const toggleDropdownstate = useSelector((state) => state.toggleDropdown);

  return (
    <div style={{}} className="sticky-top">
      <Navbar
        bg="white"
        variant="light"
        style={{ boxShadow: "0 4px 2px -2px gray", zIndex: "2" }}
      >
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "35px",
            padding: "0px",
            color: "#28a745",
            marginLeft: "8%",
            fontWeight: "bold",
          }}
        >
          Logo
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <div style={{ marginRight: "4%" }}>
          <Nav className="float-right">
            <Nav.Link href="#home">
              {" "}
              <FaShoppingCart
                onClick={() => dispatch(toggleDropdown())}
                style={{
                  fontSize: "35px",
                  marginRight: "10px",
                  marginBottom: "3px",
                  color: "#28a745",
                }}
              />
              {toggleDropdownstate ? <Cart /> : null}
              <Badge
                style={{ position: "relative", right: "24%", top: "-33%" }}
                variant="success"
              >
                {cartItems.length}
              </Badge>
            </Nav.Link>
            <Nav.Link className="heckoutButton" href="#home">
              {" "}
              <Button
                variant="success"
                style={{
                  padding: "4px",
                  fontWeight: 500,
                }}
              >
                Checkout
              </Button>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderTwo;
