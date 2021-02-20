import React from 'react'
import {Card} from  'react-bootstrap';
import {useHistory, useLocation,} from 'react-router-dom';
import { Button} from 'react-bootstrap';
const Details = ({match,movie}) => {
    let location = useLocation();
    const { title, img, rating, url} = location.state;
    const history = useHistory(match);
    // const movie = res.find(el => el.title == match.params.title);
    return (
        <div>
            <Card className="movieCard">
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title className="movieTitle">
            
            <iframe  width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
                </Card.Title>
            {/* <RatingStars filterRate={false} movieRating={movie.rating} /> */}
            </Card.Body>
            </Card>
            <Button type="button" class="light"  onClick={() =>  history.push('/') }
            >  🠬 Back  </Button>
        </div>
    )
}

export default Details
