import React from 'react';
import { Rate } from 'antd';
import './RatingStars.css'


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RatingStars = ({ filterRate, movieRating, rating, setRating }) => {
  const handleChange = value => {setRating(value)};

  return (
    <span className="ratingContent" >
      {filterRate ?
        <Rate tooltips={desc} onChange={handleChange} value={rating} style={{zIndex:"1",position :"absolute",top: "79%",left: "76%"}} />
        :
        <Rate value={movieRating} disabled className="movieRating" />
      }
    </span>
  );
}

export default RatingStars