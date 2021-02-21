import React, { useState } from 'react';
import MovieList from './MovieList/MovieList';
import SideBar from './Sidebar';
import Data from './Data';
import Filter from './FilterByName/FilterByName';
import RatingStars from './RatingStars/RatingStars';
import Caroussel from './Caroussel';


const MovieApp =() =>{
    const [movies, setMovies] = useState(Data);
    const [inputSearch, setInputSearch] = useState('');
    const [rating, setRating] = useState(1);
    const handleAdd = (newMovie)=>{
        setMovies([...movies,newMovie]);
    }

    return(
        <>
        <SideBar/>
        <div className="movieApp">
            <div className="FilterPart">
                <Filter inputSearch={inputSearch} setInputSearch={setInputSearch} />
                <RatingStars filterRate={true} rating={rating} setRating={setRating} />
            </div>
            <Caroussel />
            <MovieList movies={movies} inputSearch={inputSearch} rating={rating} handleAdd={handleAdd} />
        </div>
    </>
    )
}
export default MovieApp;
