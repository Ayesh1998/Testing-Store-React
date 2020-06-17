import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./headerthree-styles.css";
import { Link } from "react-router-dom";

const HeaderThree = (props) => {
  return (
    <div className="headerThreehead">
      <Navbar bg="white" variant="light" style={{ fontWeight: "500" }}>
        <div className="headerThreetop" style={{}}>
          <Nav className="float-right">
            <Nav.Link href="#home">
              <NavDropdown
                className="navdropclass"
                style={{
                  padding: "0px",
                  border: "#28a745 1px solid",
                  borderRadius: "5px",
                  height: "31px",
                  fontSize: "12px",
                  color: "#262626",
                  top: "-2px",
                }}
                title="Categories"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  style={{
                    fontSize: "10px",
                    color: "black",
                    fontWeight: "600",
                  }}
                  href="#action/3.1"
                >
                  Cat1
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    fontSize: "10px",
                    color: "black",
                    fontWeight: "600",
                  }}
                  href="#action/3.2"
                >
                  Cat2
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    fontSize: "10px",
                    color: "black",
                    fontWeight: "600",
                  }}
                  href="#action/3.3"
                >
                  Cat3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav.Link>

            <Nav.Link
              className="thirdHeaderListItems"
              style={{ color: "#262626" }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Link to="/aboutus">
              <Nav.Link
                className="thirdHeaderListItems"
                style={{ color: "#262626" }}
                href="#home"
              >
                About us
              </Nav.Link>
            </Link>
            <Link to="/faq">
              <Nav.Link
                className="thirdHeaderListItems"
                style={{ color: "#262626" }}
                href="#home"
              >
                FAQ
              </Nav.Link>
            </Link>
            <Link to="/pricing">
              <Nav.Link
                className="thirdHeaderListItems"
                style={{
                  padding: "5px",
                  border: "red 1px solid",
                  borderRadius: "5px",
                  height: "34px",
                  fontSize: "13px",
                  color: "red",
                }}
                href="#home"
              >
                Pricing
              </Nav.Link>
            </Link>
            <Link to="/contactus">
              <Nav.Link
                className="thirdHeaderListItems"
                style={{ color: "black" }}
                href="#home"
              >
                Contact us
              </Nav.Link>
            </Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderThree;
