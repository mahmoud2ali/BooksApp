import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 

function LoginRegster() {
  return (
    <div>
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
    </div>
  );
}

export default LoginRegster;
