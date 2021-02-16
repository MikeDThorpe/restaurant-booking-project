import React from "react";
import { Container, Col, Row, Nav, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer(props) {
  return (
    <Container>
      <hr />
      <Row>
        <Col>
          <ListGroup className="foot-rest">
            <ListGroup.Item className="foot-title">
              <b>Our Restaurants</b>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/restaurants/antarctic">Antarctic</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/restaurants/arctic">Arctic</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/restaurants/sahara">Sahara</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/restaurants/arabian">Arabian</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/restaurants/amazon">Amazon</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="foot-rest">
            <ListGroup.Item className="foot-title">
              <Link to="/book">
                <b>Book Table</b>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-title">
              <Link to="/menu">
                <b>Menu</b>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-title">
              <Link to="/about">
                <b>About Us</b>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-title">
              <Link to="/contact">
                <b>Contact Us</b>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="foot-rest">
            <ListGroup.Item className="foot-title">
              <b>Legal</b>
            </ListGroup.Item>
            <ListGroup.Item className="foot-title">
              <Link to="/terms">Terms and Conditions</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-title">
              <Link to="/privacy">Privacy Policy</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Footer;
