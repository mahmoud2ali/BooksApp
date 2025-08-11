import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // استبدل a بـ Link

function Sharedfooter() {
  return (
    <footer className="bg-dark text-white py-4 fotbg footerTxt  ">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h4 className="mb-3 footerRed">Our Vision</h4>
            <p>
              At <strong>BookHup</strong>, we value the magic of reading — the way
              it can transport you to another world, spark imagination, and
              enrich your mind.
            </p>
            <p>
              <b>Your story starts here.</b>
            </p>
          </Col>

          <Col
            xs={12}
            md={8}
            className="d-flex flex-column flex-md-row justify-content-md-end"
          >
            <div className="me-md-5 mb-4 mb-md-0">
              <h5 className="mb-3 footerRed">Main Pages</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/vision" className="text-white text-decoration-none">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="text-white text-decoration-none">
                    Product
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-3 footerRed">Privacy</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/license" className="text-white text-decoration-none">
                    License Terms
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className="text-white text-decoration-none">
                    Trending Books
                  </Link>
                </li>
                <li>
                  <Link to="/prices" className="text-white text-decoration-none">
                    Prices
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-4 border-top border-secondary pt-3">
          <Col className="text-center footerRed">
            <p className="mb-0">&copy; 2025 ITI Student. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Sharedfooter;
