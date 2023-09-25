import React from 'react';
import Hero from './Hero';

// tmdb apikey = 25217b111b1e6d85e51f5435187616e6
// https://api.themoviedb.org/3/search/movie?api_key=25217b111b1e6d85e51f5435187616e6&language=en-US&query=${searchText}&page=1&include_adult=false

const SearchView = ({keyword, searchResults}) => {
  const title = `You are searching for ${keyword}`
  console.log(searchResults,"are the search results")
    return (
      <>
        <Hero text= {title}/>
      </>
    )
  }

  export default SearchView;