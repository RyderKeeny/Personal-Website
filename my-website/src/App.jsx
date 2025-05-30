import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ImageCarousel from "./content/carousel";
import About from "./content/about";
import Dashbord from "./content/dashbord";
import "./App.css";

function App() {
  return (
    <div className="main">
      {/* React Bootstrap Navbar */}
      <Navbar className="navbar-custom" expand="lg" /*sticky="top"*/>
        <Container>
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Dashbord">Dashboard</Nav.Link>
              <Nav.Link href="#Carousel">Media</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="Dashbord">
        <Dashbord />
      </section>

      <section id="Carousel">
        <ImageCarousel />
      </section>

      <section id="About">
        <About />
      </section>
    </div>
  );
}

export default App;