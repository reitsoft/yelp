import React from "react";
import { Container } from "react-bootstrap";
import RestaurantDetailComponent from "../components/RestaurantDetail";



const RestaurantDetail = (props) => {
  return (
    <Container style={{ marginTop: 30 }}>
      <RestaurantDetailComponent />
      
    </Container>
  );
};

export default RestaurantDetail;
