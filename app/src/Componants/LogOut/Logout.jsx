import { Button, Col } from "react-bootstrap"

function Logout({ onLogout }) {
    const handleLogout = () => {
    localStorage.removeItem("user");
    onLogout();
    window.location.reload();
  };
    return (
        <div>
        <Col xs="auto">
          <Button
            variant="danger"
            className="text-white fw-bold px-4 py-2 rounded-pill"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Col>
        </div>
    )
}

export default Logout
