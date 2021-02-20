import React from 'react';
import { Rate } from 'antd';
import './RatingStars.css'


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RatingStars = ({ filterRate, movieRating, rating, setRating }) => {

  // const [value, setValue] = useState(1);


  const handleChange = value => {
    // setValue(value);
    setRating(value)
  };

  return (
    <span className="ratingContent">
      {filterRate ?
        <Rate tooltips={desc} onChange={handleChange} value={rating} />
        :
        <Rate value={movieRating} disabled className="movieRating" />
      }

    </span>
  );
}

export default RatingStars