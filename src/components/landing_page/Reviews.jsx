import React from "react";
import reviews from "../../reviews";
import ReviewCard from "./ReviewCard";

function Reviews() {
    return(
        <section id="reviews">
            <h1 className="section-title">reviews</h1>
            <div className="review-row row">{
                reviews.map((review) => 
                    <ReviewCard 
                        name={review.name}
                        text={review.text}
                    />
                )}
            </div>
        </section>
    );
}

export default Reviews;