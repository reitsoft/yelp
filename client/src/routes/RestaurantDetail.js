import React from "react";
import { Container } from "react-bootstrap";
import RestaurantDetailComponent from "../components/RestaurantDetail";
import StarRating from "../components/StarRating"


const RestaurantDetail = (props) => {
  return (
    <Container style={{ marginTop: 30 }}>
      <RestaurantDetailComponent />
      <StarRating rating={2.5} />
    </Container>
  );
};

export default RestaurantDetail;
