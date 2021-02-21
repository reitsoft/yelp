import React, { useState, createContext } from "react";

export const ContextRestaurants = createContext();

export const ContextRestaurantsProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant])
  }

  return (
    <ContextRestaurants.Provider value={{ restaurants, setRestaurants, addRestaurant }}>
      {props.children}
    </ContextRestaurants.Provider>
  );
};
