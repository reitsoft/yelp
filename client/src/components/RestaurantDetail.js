import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";
import { ContextRestaurants } from "../context/ContextRestaurants";
import AddReview from "./AddReview";
import Reviews from "./Reviews";
import StartRating from "./StarRating";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    ContextRestaurants
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data)
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
        <h2>{selectedRestaurant.name}</h2>
        <div>
          <div>
            {/* <StartRating rating={selectedRestaurant.restaurant.avg_rating} /> */}
            {/* <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "0 Bewertungen"}
            </span> */}
          </div>
        </div>
        <AddReview />
        <div className="mt-3">
          {/* <Reviews reviews={selectedRestaurant.reviews} /> */}
        </div>
      </>
    )
  );
};

export default RestaurantDetail;
