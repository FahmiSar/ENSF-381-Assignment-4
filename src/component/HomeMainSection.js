import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reviewData from "../data/reviews";

function HomeMainSection(){
    const [firstReview, setFirstReview] = useState(null);
    const [secondReview, setSecondReview] = useState(null);

    useEffect(() =>{
        // Math.random() gives you a random number between 0 and 1 (like 0.4)
        const randomIndex = Math.floor(Math.random() * reviewData.length);
        setFirstReview(reviewData[randomIndex]);

        let secondRandomIndex;
        do{
            secondRandomIndex = Math.floor(Math.random() * reviewData.length);
        }while(secondRandomIndex === randomIndex);
        setSecondReview(reviewData[secondRandomIndex]);
        
    }, []);

    const renderStars = (stars) =>{
        const starIcons = [];
        for(let i = 0; i < stars; i++){
            starIcons.push(<span key = {i}>⭐</span>);
        }
        return starIcons;
    }

    return(
        <>
            <h2>About Us</h2>
            <p>Welcome to the Company where we sell top quality things</p>
            <Link to="/Productpage">
                <button type = "button">Shop Now</button>
            </Link>

            <h2>Customer Reviews</h2>
            {firstReview && (
                <div>
                    <p>{firstReview.customerName}</p>
                    <p>{firstReview.reviewContent}</p>
                    <p>Rating: {renderStars(firstReview.stars)}</p>
                </div>
            )}

            {secondReview && (
        <div>
          <p>{secondReview.customerName}</p>
          <p>{secondReview.reviewContent}</p> {/* Corrected typo here -safaa*/}
          <p>Rating: {renderStars(secondReview.stars)}</p>
        </div>
            )}

        
        </>
    );
}


export default HomeMainSection;
