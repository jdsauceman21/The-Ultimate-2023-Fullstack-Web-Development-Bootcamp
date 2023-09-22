// import logo from './logo.svg';
import './App.css';
import React from 'react';

const logo = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
const apiUrl = "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id"

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    );
  }
}

class StarWarsTitle extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="StarWars" />
      </>
    )
  }
}

class StarWars extends React.Component {
  constructor(){
    super()
    this.state ={
      loadedCharacter: false,
      name: null,
      image: null,
      height: null,
      homeworld: null,
      // films: [],
    }
  }
  getNewCharacter() {
    const rand = Math.round( Math.random() * 88)
    // const url = `https://github.com/akabab/starwars-api/tree/master/api/id/${rand}`;
    const url = `${apiUrl}/${rand}.json`;
    fetch(url)
    .then(Response => Response.json())
    .then(data =>{
      this.setState({
        name: data.name,
        image: data.image,
        height: data.height,
        homeworld: data.homeworld,
        // films: [data.films],
        loadedCharacter: true,
      })
    })
    
  }
  render() {

    // const movies = this.state.films.map((url, i) => {
    //   return <FilmItemRow key={i} url={url} />
    // })

    return(
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <h1>{this.state.name}</h1>
            <img src={this.state.image} alt= {this.state.image} height="300" />
            <p>Height: {this.state.height} m</p>
            <p>Home World: <span className="capitalize">{this.state.homeworld}</span></p>
            {/* <ul>{movies}</ul> */}
          </div>
        }
        <button type='button' onClick={() => this.getNewCharacter()} 
        className='btn'>Randomize Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StarWarsTitle />
        <StarWars />
      </header>
    </div>
  );
}

export default App;
