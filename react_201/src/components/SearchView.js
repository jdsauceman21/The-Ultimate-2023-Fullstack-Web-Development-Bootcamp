import React from 'react';
import Hero from './Hero';

// tmdb apikey = 25217b111b1e6d85e51f5435187616e6
// https://api.themoviedb.org/3/search/movie?api_key=25217b111b1e6d85e51f5435187616e6&language=en-US&query=${searchText}&page=1&include_adult=false

const MovieCard = ({movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} class="card-img-top" alt={movie.original_title}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">Show Details</a>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`
  // Check if there are search results before mapping
  const resultsHtml = searchResults.map((obj, i) => {
    return<MovieCard movie={obj} key={i} />
  })
    return (
      <>
        <Hero text= {title}/>
        {resultsHtml &&
        <div className='container'>
          <div className='row'>
            {resultsHtml}
          </div>
        </div>
        }
      </>
    )
  }

  export default SearchView;