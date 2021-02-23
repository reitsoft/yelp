import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { ContextRestaurants } from "../context/ContextRestaurants";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    ContextRestaurants
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    selectedRestaurant && (
      <>
        <h2>{selectedRestaurant.restaurant.name}</h2>
        <AddReview />
        <div className="mt-3">
          <Reviews reviews={selectedRestaurant.reviews} />
        </div>
      </>
    )
  );
};

export default RestaurantDetail;
