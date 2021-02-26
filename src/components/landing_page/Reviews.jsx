import React from "react";
import reviews from "../../reviews";
import ReviewCard from "./ReviewCard";
import speakers from "../../assets/review_speakers.png";


function Reviews() {
    return(
        <section id="reviews">
            <div className="row">
                {/* speakers */}
                <div className="col-4">
                    <img className="speaker-pair" src={speakers}/>
                </div>
                {/* reviews */}
                <div className="col-8 reviews-content">
                    {/* title */}
                    <h1 className="section-title">reviews</h1>
                    {/* get reviews from reviews.js */}
                    <div className="review-row row">{
                        reviews.map((review) => 
                            <ReviewCard 
                                name={review.name}
                                text={review.text}
                            />
                        )}
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Reviews;