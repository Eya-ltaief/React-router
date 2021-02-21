import React from 'react';
import {Card} from  'react-bootstrap';
import './MovieCard.css';
import ModalAddMovie from '../AddMovie/AddMovie'
import RatingStars from '../RatingStars/RatingStars';
import {Link} from 'react-router-dom';

const MovieCard = ({movie, handleAdd, addCard}) => {
    return (
        addCard ?
        <Card className="movieCard"style={{backgroundColor: "black",color: "black"}}>
            <Card.Body >
                <Card.Title className="addMovieBtn">
                    <ModalAddMovie handleAdd={handleAdd} />
                </Card.Title>
            </Card.Body>
        </Card> 
        :
        <Card className="movieCard" style={{backgroundColor: "black",color: "black"}}>
            <Card.Img variant="top" src={movie.img} />
            <Card.Body>
                <Link to={{pathname:`/movie/${movie.id}`,state:movie}} key={movie.id} ><Card.Title className="movieTitle">{movie.title}</Card.Title></Link>
                <RatingStars filterRate={false} movieRating={movie.rating} />
            </Card.Body>
        </Card>
    )
}
export default MovieCard;