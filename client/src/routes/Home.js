import React from "react";

import RestaurantAdd from "../components/RestaurantAdd";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <div>
      <RestaurantAdd />
      <RestaurantList />
    </div>
  );
};

export default Home;
