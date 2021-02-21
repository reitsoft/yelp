import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"

import RestaurantFinder from "../api/RestaurantFinder";
import { Container, Table, Button } from "react-bootstrap";
import { ContextRestaurants } from "../context/ContextRestaurants";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(ContextRestaurants);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation()
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation()
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`)
  }

  return (
    <Container>
      <Table bordered hover style={{ marginTop: 30 }}>
        <thead style={{ backgroundColor: "#d8d8d8" }}>
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Rating</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id} onClick={()=> handleRestaurantSelect(restaurant.id)}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>reviews</td>
                  <td align="right">
                    <Button
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                      variant="warning"
                      size="sm"
                      style={{ marginRight: 10 }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default RestaurantList;
