import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "../styles/RestaurantSummary.css";

function RestaurantSummary(props) {
  return (
    <Container className="rest-summary">
      <Row>
        <Col xs={12} lg={6}>
          <Card className="rest-card">
            <Card.Img className="rest-img" variant="top" src={props.thisRestaurant.image} />
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card className="rest-card">
            <Card.Body>
              <Card.Title>{props.thisRestaurant.name} Restaurant</Card.Title>
              <Card.Text className="summary-text">
                <b>Address</b>
              </Card.Text>
              <Card.Text className="summary-text">
                {props.thisRestaurant.address}
              </Card.Text>
              <Card.Text className="summary-text">
                <b>Opening Times</b>
              </Card.Text>
              <Card.Text className="summary-text">
                Weekday: {props.thisRestaurant.openingTimes.weekday}
              </Card.Text>
              <Card.Text className="summary-text">
                Saturday: {props.thisRestaurant.openingTimes.saturday}
              </Card.Text>
              <Card.Text className="summary-text">
                Sunday: {props.thisRestaurant.openingTimes.sunday}
              </Card.Text>
              <Card.Text className="summary-text">
                <b>Phone Number</b>
              </Card.Text>
              <Card.Text className="summary-text">
                {props.thisRestaurant.phoneNumber}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantSummary;
