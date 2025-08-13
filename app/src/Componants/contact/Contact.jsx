import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './contact.css'

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-page ">
            <div className="container my-5">
                <h1 className="text-center textWhite mb-4">Have questions, feedback, or ideas? We’d love to hear from you!
                    Reach out to our team anytime — we’re here to help and connect.</h1>
                <div className="row">

                    {/* Left Side - Form */}
                    <div className="col-md-6 mb-4">
                        <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="danger" className="w-100">
                                Send Message
                            </Button>
                        </Form>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="col-md-6">
                        <div className="p-4 border rounded bg-white shadow">
                            <h4 className="mb-3">Team Contacts</h4>
                            <p>
                                <FaEnvelope className="me-2 text-danger" />
                                <a href="mailto:mina.mosaad5@gmail.com" className="text-decoration-none text-dark">
                                    mina.mosaad5@gmail.com
                                </a>
                            </p>
                            <p>
                                <FaEnvelope className="me-2 text-danger" />
                                <a href="mailto:abanoubmaqqar19@gmail.com" className="text-decoration-none text-dark">
                                    abanoubmaqqar19@gmail.com
                                </a>
                            </p>
                            <p>
                                <FaEnvelope className="me-2 text-danger" />
                                <a href="mailto:mahmoud2m2ali@gmail.com" className="text-decoration-none text-dark">
                                    mahmoud2m2ali@gmail.com
                                </a>
                            </p>
                            <p>
                                <FaEnvelope className="me-2 text-danger" />
                                <a href="mailto:rahmanaser964@gmail.com" className="text-decoration-none text-dark">
                                    rahmanaser964@gmail.com
                                </a>
                            </p>
                            <p>
                                <FaEnvelope className="me-2 text-danger" />
                                <a href="mailto:esraadelfadel@gmail.com" className="text-decoration-none text-dark">
                                    esraadelfadel@gmail.com
                                </a>
                            </p>

                            {/* <p><FaEnvelope className="me-2 text-danger" /> member2@email.com</p> */}
                            <p><FaPhoneAlt className="me-2 text-danger" /> +20 1228255050</p>
                            {/* <p><FaPhoneAlt className="me-2 text-danger" /> +20 987 654 321</p> */}
                            <p>
                                <FaMapMarkerAlt className="me-2 text-danger" />
                                <a
                                    href="https://www.google.com/maps/place/30.0772755,31.2827972"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    Bookstore, Cairo, Egypt
                                </a>
                            </p>
                            <div className="mt-3">
                                <strong>LinkedIn Profiles:</strong>
                                <div className="d-flex gap-3 mt-2">
                                    <a href="https://www.linkedin.com/in/mina-mosaad-a596ab278/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} className="text-primary" />

                                    </a>
                                    <a href="https://www.linkedin.com/in/abanoub-maqqar-4b7980236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} className="text-primary" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mahmoud-mohamed-75b8a7235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} className="text-primary" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rahma-nasser-414962278/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} className="text-primary" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/esraa-adel-fadel-4072b12a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} className="text-primary" />
                                    </a>
                                </div>
                            </div>

                            <h4 className="mt-4 mb-3">Follow Us</h4>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="me-3 fs-4 text-danger">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="fs-4 text-primary">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
