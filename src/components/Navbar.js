import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "react-router-dom/Link";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

function MyNav(props) {
  return (
    <Navbar className="navbar" expand="md">
      <Link to="/">
        <Navbar.Brand className="brand">
          <p>A N D R E S</p>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Navbar.Text className="nav-link">
            <Link to="/">
              <p>Home</p>
            </Link>
          </Navbar.Text>
          <NavDropdown title="Locations" id="basic-nav-dropdown">
            <NavDropdown.Item href="/restaurants/antarctic">Antarctic</NavDropdown.Item>
            <NavDropdown.Item href="/restaurants/arctic">Arctic</NavDropdown.Item>
            <NavDropdown.Item href="/restaurants/sahara">Sahara</NavDropdown.Item>
            <NavDropdown.Item href="/restaurants/arabian">Arabian</NavDropdown.Item>
            <NavDropdown.Item href="/restaurants/gobi">Gobi</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text className="nav-link">
            <Link to="/menu">
              <p>Menu</p>
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/book">
              <Button className="book-btn">
                <b>Book Table</b>
              </Button>
            </Link>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
