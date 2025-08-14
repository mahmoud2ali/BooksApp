import { Button, Col } from "react-bootstrap"
import { useContext } from "react";
import { FavoritesContext } from '../../context/FavoritesContext';

function Logout({ onLogout }) {
    const {setFavorites}=useContext(FavoritesContext);

    const handleLogout = () => {
    localStorage.removeItem("user");
    setFavorites([]);
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
