import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [searchResults, setsearchResults] = useState ([])
  const [searchText, setSearchText] = useState ('Searching for ...')

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path='/search' element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
      </Routes>
    </div>
  );
}

export default App;
