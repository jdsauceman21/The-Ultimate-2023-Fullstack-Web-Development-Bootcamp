import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import {Routes,Route} from 'react-router-dom';
import Popular from './components/Popular';

function App() {

  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');

  useEffect(() => {
    if(searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=25217b111b1e6d85e51f5435187616e6&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(Response => Response.json())
    .then(data => {
      setSearchResults(data.results)
    })
  }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/about" element={<Popular />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<MovieView/>} />
      </Routes>
    </div>
  );
}

export default App;

//       <Navbar setSearchText={setSearchText} />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/about" component={About} />
//         <Route path="/popular" component={Popular} />
//         <Route path="/search"><Search keyword={searchText} searchResults={searchResults} />
//         </Route>
//         <Route path="/movies/:id" component={MovieView} />
//         <Route path="*"><ErrorPage />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;