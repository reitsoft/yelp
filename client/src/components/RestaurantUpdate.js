import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import RestaurantFinder from "../api/RestaurantFinder";

const RestaurantUpdate = (props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const { id } = useParams();
  let history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      const { name, location, price_range } = response.data.data.restaurants;
      setName(name);
      setLocation(location);
      setPriceRange(price_range);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
     await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
      active: true,
    });
    history.push("/")
  };

  return (
    <div>
      <Form className="mt-4">
        <Form.Group className="mb-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter restaurant name..."
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Location</Form.Label>
          <Form.Control
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Location..."
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Price Range</Form.Label>
          <Form.Control
            id="price_range"
            as="select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" type="submit" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default RestaurantUpdate;
