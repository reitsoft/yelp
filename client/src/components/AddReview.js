import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const response = await RestaurantFinder.post(`/${id}/addReview`, {
      name,
      rating,
      review: reviewText,
    });
    console.log(response)
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="row align-items-center mb-3">
          <div className="form-group col-4">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-2">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group col-6 mb-3">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            placeholder="Review here ..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmitReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
