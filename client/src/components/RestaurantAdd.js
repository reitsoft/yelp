import React, { useContext, useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ContextRestaurants } from "../context/ContextRestaurants";

const RestaurantAdd = () => {
  const { addRestaurant } = useContext(ContextRestaurants);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range ...");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
        active: true,
      });
      addRestaurant(response.data.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form style={{ marginTop: 30 }}>
        <Row>
          <Col md>
            <Form.Group id="name">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Restaurant Name..."
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group id="location">
              <Form.Control
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                id="location"
                placeholder="Location..."
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group id="price_range">
              <Form.Control
                as="select"
                id="price_range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option disabled>Price range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Button type="submit" onClick={handleSubmit} variant="primary">
              Add Restaurtant
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RestaurantAdd;
