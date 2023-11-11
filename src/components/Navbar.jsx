import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegAddressBook, FaBirthdayCake } from "react-icons/fa";

import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarFlow = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <div className="cont-1">
            <Nav.Link as={Link} to="/">
              <FaHome />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Contacto">
              <FaRegAddressBook />
              Contacto
            </Nav.Link>
          </div>
          <div className="cont-2">
            <Nav.Link as={Link} to="/">
              Happy Cake
              <FaBirthdayCake />
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFlow;

