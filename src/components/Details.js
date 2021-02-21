import React from 'react'
import {useHistory, useLocation,} from 'react-router-dom';
import { Button} from 'react-bootstrap';
const Details = ({match}) => {
    let location = useLocation();
    const { title, img, rating, url} = location.state;
    const history = useHistory(match);
    return (
        <div style={{marginTop:"10%"}}>
            <iframe  width="560" height="315" src={url} frameBorder="0" allow="autoplay;" allowFullScreen></iframe>
            <br />
            <Button type="button" class="light"  onClick={() =>  history.push('/') }>  Back To the Homepage  </Button>
        </div>
    )
}

export default Details
