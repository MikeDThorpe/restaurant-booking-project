import React from "react";
import { Container, Col, Row, Nav, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer(props) {
  return (
    <footer>
      <hr />
    <Container>
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
              <b>Find Out More</b>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/book">
                Book a Table
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/menu">
                Menu
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/about">
                About Us
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/contact">
                Contact Us
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="foot-rest">
            <ListGroup.Item className="foot-title">
              <b>Legal</b>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/terms">Terms and Conditions</Link>
            </ListGroup.Item>
            <ListGroup.Item className="foot-link">
              <Link to="/privacy">Privacy Policy</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
    </Container>
    </footer>
  );
}

export default Footer;
