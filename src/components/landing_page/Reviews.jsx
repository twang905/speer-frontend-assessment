import React from "react";
import reviews from "../../reviews";
import ReviewCard from "./ReviewCard";
import speakers from "../../assets/review_speakers.png";


function Reviews() {
    return(
        <section id="reviews">
            <div className="row">
                <div className="col-4">
                    <img className="speaker-pair" src={speakers}/>
                </div>
                <div className="col-8 reviews-content">
                    <h1 className="section-title">reviews</h1>
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