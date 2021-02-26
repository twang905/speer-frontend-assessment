import React from "react";
import reviews from "../../reviews";
import ReviewCard from "./ReviewCard";
import speakers from "../../assets/review_speakers.png";
import { useHistory } from "react-router-dom";


function Reviews() {
    const history = useHistory();
    return(
        <section id="reviews">
            <button 
                type="button" 
                className="btn cta review-btn"
                onClick={() => history.push('/pricing') } 
            >
                Try it now
            </button>
            <div className="row review-body">
                {/* speakers */}
                <div className="col-3">
                    <img className="speaker-pair" src={speakers}/>
                </div>
                {/* reviews */}
                <div className="col-9 reviews-content">
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