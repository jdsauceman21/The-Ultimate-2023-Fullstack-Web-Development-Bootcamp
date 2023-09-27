import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import {Routes,Route} from 'react-router-dom';

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
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
        <Route path="/movies/:id" element={<MovieView/>} />
      </Routes>
    </div>
  );
}

export default App;

// import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Search from "./components/Search";
// import MovieView from "./components/MovieView";
// import ErrorPage from "./components/ErrorPage";
// import Popular from "./components/Popular";

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     if (searchText) {
//       fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&query=${searchText}&page=1&include_adult=false`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setSearchResults(data.results);
//         });
//     }
//   }, [searchText]);

//   return (
//     <div>
//       <Navbar setSearchText={setSearchText} />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/about" component={About} />
//         <Route path="/popular" component={Popular} />
//         <Route path="/search">
//           <Search keyword={searchText} searchResults={searchResults} />
//         </Route>
//         <Route path="/movies/:id" component={MovieView} />
//         <Route path="*">
//           <ErrorPage />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;