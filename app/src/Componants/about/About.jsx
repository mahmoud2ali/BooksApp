// import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className="btnRed textWhite Aboutbgimg d-flex flex-column justify-content-between align-items-center text-center pt-5">
                <div
                    className="btnRed textWhite Aboutbgimg d-flex flex-column justify-content-start align-items-center g-5 text-center pb-5"
                    style={{ minHeight: "80vh" }}
                >
                    <h1 className="display-1 mt-5 fw-bold text-center">
                        About Our Bookstore
                    </h1>

                    <p className="lead mt-3 text-center display-6 px-4">
                        Welcome to <strong>Our Bookstore</strong> — a modern online platform
                        where every reader can find their next favorite story.
                        We offer a rich collection of books, smart browsing tools, and a
                        user-friendly interface to make your reading journey seamless.
                    </p>

                    {/* Features Section */}
                    <div className="mt-5 text-start px-5">
                        <h2 className="fw-bold mb-4">Key Features</h2>
                        <ul className="fs-4">
                            <li> <strong>Advanced Filtering</strong> — Easily search and filter books by category, author, or genre.</li>
                            <li> <strong>Favorites</strong> — Save your most-loved books for quick access anytime.</li>
                            <li> <strong>Session & Local Storage</strong> — Keep your preferences and favorites even after you leave.</li>
                            <li> <strong>Home Page</strong> — A welcoming landing page with highlights and featured books.</li>
                            <li> <strong>Contact Us</strong> — Reach out to us directly for inquiries or feedback.</li>
                            <li> <strong>About Project</strong> — Learn about the purpose and vision of our bookstore.</li>
                            <li> <strong>Single Book Page</strong> — Detailed information for each book, including description and author.</li>
                            <li> <strong>All Books Page</strong> — Browse the entire collection in one place.</li>
                            <li> <strong>Login & Register</strong> — Secure authentication for personalized experiences.</li>
                            <li> <strong>Guest & User Views</strong> — Different layouts and features depending on login status.</li>
                            <li> <strong>Management Dashboard</strong> — Full CRUD operations for managing books, users, and content.</li>
                        </ul>
                    </div>

                    {/* Authors Section */}
                    <div className="mt-5 px-4">
                        <h2 className="fw-bold">Owners</h2>
                        <p className="fs-4">
                            This project was created by:
                            <br />
                            <strong>Mina Mosaad</strong> <br />
                            <strong>Abanoub Maqqar</strong> <br />
                            <strong>Mahmoud Mohamed</strong><br />
                            <strong>Rahma Nasser</strong><br />
                            <strong>Esraa Adel</strong>
                        </p>
                    </div>

                    <Link
                        to="/product"
                        className="btn btn-danger textWhite mt-5 px-4 py-2 fs-5 rounded-pill d-block mx-auto"
                    >
                        Browse Our Collection
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
