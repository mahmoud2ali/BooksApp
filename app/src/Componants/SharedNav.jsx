import {Container,Nav,Navbar,Button,Col,Row,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import LoginRegster from "./LoginAndRegister/LoginRegster";
import Logout from "./LogOut/Logout";
import { useState, useEffect } from "react";

function SharedNav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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

            {/* admin feature            */}
            {user?.admin && (
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
                }
              >
                Dashboard
              </NavLink>
            )}

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              All Books
            </NavLink>
           
           {user && (
            <NavLink
              to="/Favorites"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
             Favorite Books 
            </NavLink>
          )}
            
             <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link text-danger fw-bold" : "nav-link textWhite"
              }
            >
              Contact us

            </NavLink>

            {/* login featur  */}
           
          </Nav>

          {user ? <Logout onLogout={() => setUser(null)} /> : ( <LoginRegster />)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SharedNav;
