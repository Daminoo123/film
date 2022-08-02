import './App.css';
import {moviesData} from '../src/Componenets/Data/Data'
import MovieList from './Componenets/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { AddMovie } from './Componenets/AddMovies/AddMovie';
import {Filter} from './Componenets/Filter/Filter'
import Title from './Componenets/title/Title';


function App() {
  const [movies, setmovies]=useState(moviesData)
  const add =(newMovie) =>{
    setmovies([...movies,newMovie])
  }
  console.log(movies)
  const [inputsearch,setinputsearch]=useState('')
  return (
    <div className="App">
      <Title/>
      <Filter inputsearch={inputsearch} setinputsearch={setinputsearch}/>
      <MovieList movies={movies} inputsearch={inputsearch}/>
      <AddMovie add={add} />
 
     
    </div>
  );
}

export default App;
