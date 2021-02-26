import React from "react";

function ReviewCard(props) {
    return(
        <div className="col-4">
            {/* 5 stars */}
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            <i class="star-icon fas fa-star"></i>
            {/* name and review */}
            <h2 className="review-name">{props.name}</h2>
            <h2 className="review-text">{props.text}</h2>
        </div>
    );
}
export default ReviewCard;
