import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { PropTypes } from "prop-types";
import "./Rating.css";

// create a Star component called FStar with classname star
const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar 
        className="star"
        color={selected ? "#FFCB45" : "#F2F2F2"} 
        onClick={onSelect}
        />
);

// create a Rating component with classname rating
const Rating = ({ number = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    return [...Array(number)].map((n, i) => (
            <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
        ))};

        Rating.propTypes = {
            number: PropTypes.number,
        };

export default Rating;