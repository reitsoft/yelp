import React, { useState, createContext } from "react";

export const ContextRestaurants = createContext();

export const ContextRestaurantsProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <ContextRestaurants.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </ContextRestaurants.Provider>
  );
};
