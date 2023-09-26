import Hero from "./Hero";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=25217b111b1e6d85e51f5435187616e6&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data);
        });

    }, [id, setMovieDetails]);

    return (
        <>
            <Hero text={movieDetails.original_title} />
        </>
    );
};

export default MovieView;
