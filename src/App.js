import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ShopProvider } from "./Context/ShopContext";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/products">
              React Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/products">
                  สินค้าทั้งหมด
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </ShopProvider>
    </BrowserRouter>
  );
};

export default App;
