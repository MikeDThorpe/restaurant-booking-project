// import React from "react";
import { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import "../styles/ContactForm.css";

const ContactForm = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email && message) {
      submitForm({ name, email, phoneNumber, subject, message });

      setName("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <Container className="contact-cont rounded">
      <article>
        <div className="contact-head p-3 rounded text-center text-white">
          <h3>Get In Touch</h3>
        </div>
        <Form className="contact-form" onSubmit={(e) => submitHandler(e)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Your Name (required)"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  name="subject"
                  type="text"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Your Email (required)"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  placeholder="Your Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  value={message}
                  placeholder="Your Message (required)"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="submit-btn" type="submit">
            Submit
          </Button>
        </Form>
      </article>
    </Container>
  );
};

export default ContactForm;
