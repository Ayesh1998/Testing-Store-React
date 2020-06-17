import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaTruck, FaUserAlt, FaPhoneAlt } from "react-icons/fa";

const Headerone = (props) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        style={{
          borderBottom: "1px #999393 solid",
          fontSize: "13px",
          padding: "0px",
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav style={{ color: "#918C8C" }}>
            <Nav.Link
              className="float-right"
              href="#deets"
              style={{
                color: "black",
                fontSize: "16",
              }}
            >
              <FaPhoneAlt
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  fontSize: "16",
                }}
              />
              +94779 510 260
            </Nav.Link>
            <Nav.Link href="#deets" style={{ fontSize: "16" }}>
              <FaTruck
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  fontSize: "16",
                }}
              />
              Delivery Areas
            </Nav.Link>
            <Nav.Link style={{ fontSize: "16" }} href="#deets">
              <FaUserAlt
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  fontSize: "16",
                }}
              />
              My Account
            </Nav.Link>

            <Nav.Link style={{ color: "black" }} href="#deets">
              <Button
                variant="outline-success"
                style={{
                  marginTop: "-4px",
                  padding: "4px",
                  fontSize: "12px",
                  color: "success",
                }}
              >
                Register
              </Button>
            </Nav.Link>
            <Nav.Link
              href="#deets"
              style={{
                color: "#28a745",
                fontSize: "16",
              }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Headerone;
