import React from "react";
import { Container } from "react-bootstrap";
import { Form, RestaurantSummary } from "../components";
import "../styles/Restaurants.css";
import { useParams } from "react-router-dom";
import restaurantData from "../assets/data/restaurant-data";

function Restaurants(props) {
  let { name } = useParams();
  let thisRestaurant = restaurantData.find(
    (rest) => rest.name.toLowerCase() == name.toLowerCase()
  );

  return (
    <Container className="rest-cont">
      <RestaurantSummary thisRestaurant={thisRestaurant} />
      <Form />
    </Container>
  );
}

export default Restaurants;
