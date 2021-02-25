import React from "react";

function ReviewCard(props) {
    return(
        <div className="col-4">
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <h2 className="review-name">{props.name}</h2>
            <h2 className="review-text">{props.text}</h2>
        </div>
    );
}
export default ReviewCard;
