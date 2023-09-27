import Hero from "./Hero";
import MovieCard from "./MovieCard";

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;
  const resHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  if (searchResults.length > 0 && keyword !== "") {
    return (
      <>
                
        <Hero text={title} />
        {resHtml && (
          <div className="container">
            <div className="row">{resHtml}</div>
          </div>
        )}
      </>
    );
  } else if (keyword === "") {

    return <div className="d-flex container justify-content-center align-items-center min-vh-100">
              <h1>Enter movie</h1>
          </div>;
  } else {
    return <div className="d-flex container justify-content-center align-items-center min-vh-100">
              <h1>Not found!!</h1>
           </div>;
  }
};

export default Search;