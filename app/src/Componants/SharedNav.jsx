import {
  Container,
  Nav,
  Navbar,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function SharedNav() {
  return (
    <Navbar expand="lg" className="custom-navbar bgColor textWhite">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand text-danger fw-bold font-monospace text-capitalize"
          style={{ textDecoration: "none" }}
        >
          BookHup
        </NavLink>

      
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-danger" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto textWhite">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              Product
            </NavLink>

          </Nav>

          
          <Row className="ms-auto justify-content-center justify-content-lg-end">
            <Col xs="auto">
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="danger"
                  className="text-white fw-bold px-4 py-2 rounded-pill"
                >
                  Login
                </Button>
              </NavLink>
            </Col>
            <Col xs="auto">
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <Button
                  variant="danger"
                  className="text-white fw-bold px-4 py-2 rounded-pill"
                >
                  Register
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SharedNav;
