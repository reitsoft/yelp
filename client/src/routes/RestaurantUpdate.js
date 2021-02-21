import React from "react";
import { Container } from "react-bootstrap";

import RestaurantUpdateComponent from "../components/RestaurantUpdate"

const RestaurantUpdate = (props) => {
  return (
    <Container style={{ marginTop: 30 }}>
      <h2> Update Restaurant</h2>
      <RestaurantUpdateComponent />
    </Container>
  );
};

export default RestaurantUpdate;
