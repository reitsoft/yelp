import React from "react";
import StarRating from "./StarRating";

const Reviews = ({reviews}) => {
  return (
    <div className="row row-cols-3 mb-2 mr-2 d-flex justify-content-between">
      {reviews.map((review) => {
        return(
          <div key={review.id}
        className="card text-white bg-secondary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>{review.name}</span>
          <span>
            <StarRating rating={review.rating} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">
            {review.review}
          </p>
        </div>
      </div>
        )
      })}


      {/* <div
        className="card text-white bg-secondary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alex</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
