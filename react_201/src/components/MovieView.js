import Hero from "./Hero";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const notFoundUrl = 'https://via.placeholder.com/304x456?text=No+Poster+Available';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=25217b111b1e6d85e51f5435187616e6&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 1000);
      });
  }, [id, setMovieDetails]);

  function renderNotFoundImage() {
    return (
      <img
        src={notFoundUrl}
        alt="Movie Poster Not Found"
        className="img-fluid shadow rounded"
      />
    );
  }

  function renderPoster(posterPath) {
    return (
      <img
        src={posterPath}
        alt="Movie Poster"
        className="img-fluid shadow rounded"
      />
    );
  }

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails && movieDetails.original_title) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropPath} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                {movieDetails.poster_path ? renderPoster(posterPath) : renderNotFoundImage()}
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
    // Handle the case when movie details are not available
    return <Hero text="Movie details not found" />;
  }

  return <>{renderMovieDetails()}</>;
};

export default MovieView;
