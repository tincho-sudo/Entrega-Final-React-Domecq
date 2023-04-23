import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

// Solo para aclarar, no uso "Link" porque necesito LinkContainer de react-router-bootstrap
// la sintaxis basica podria ser algo como <Link to="/">Inicio</Link> o incluso
// <Link to="/" className="link-principal">Inicio</Link>

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false);

  function handleToggle() {
    setExpanded(!expanded);
  }
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect
    >
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>TThings</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-center">
            <LinkContainer to="/">
              <Nav.Link onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            </LinkContainer>
            {/* No divido a los juegos, hardware ni accesorios en categorias porque es solo para mostrar el concepto.
             Podria hacer esto de la misma manera que el formulario del componente InputForm, pero lo voy a dejar para completar mas adelante*/}
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <LinkContainer to="/products/category/games">
                <NavDropdown.Item onClick={() => setExpanded(false)}>
                  Juegos
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/products/category/hardware/">
                <NavDropdown.Item onClick={() => setExpanded(false)}>
                  Hardware
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/products/category/accessories/">
                <NavDropdown.Item onClick={() => setExpanded(false)}>
                  Accesorios
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown title="Peliculas">
                <LinkContainer to={`/products/category/movies/Fantasia`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Fantasia
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/movies/Ciencia-Ficcion`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Ciencia Ficcion
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/movies/Aventuras`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Aventuras
                  </NavDropdown.Item>
                </LinkContainer>
                {/* Me gustaria hacer la creacion de los dropdown de forma dinamica con los generos que haya en la db, pero eso
                implicaria un monton de lecturas creo.. si fuese una db local lo haria sin ninguna duda mapeando y listo */}
              </NavDropdown>
              <NavDropdown title="Series">
                <LinkContainer to={`/products/category/series/Fantasia`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Fantasia
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/Ciencia-Ficcion`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Ciencia Ficcion
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/Drama`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Drama
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/products/category/series/Comedia`}>
                  <NavDropdown.Item onClick={() => setExpanded(false)}>
                    Comedia
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link onClick={() => setExpanded(false)}>Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link onClick={() => setExpanded(false)}>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
