


import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movielist from './components/movielist.js';
import Heading from './components/Heading.js';
import Search from './components/Search.js';
import AddFavourites from './components/Addfavourites';
import Removefav from './components/removefav';

const App = () =>{
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [favourites,setFavourites] = useState([]);

  // if(searchValue === null)
  // {
  //   setSearchValue("avengers");
  //   useEffect(()=>{
  //     getMovieRequest(searchValue);
  //   }, [searchValue]);
  // }

  

  // const defaultMovie = async()=>{
  //     const url = `http://www.omdbapi.com/?s=avengers&apikey=d8a88e`;

  //     const response = await fetch(url);
  //     const responseJson = await response.json(); 

  //     if(responseJson.Search)
  //     {
  //       setMovies(responseJson.Search);
  //     }
    
  //   };

  const getMovieRequest = async(searchValue)=>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d8a88e`;

      const response = await fetch(url);
      const responseJson = await response.json(); 

      if(responseJson.Search)
      {
        setMovies(responseJson.Search);
      }
      
    };

    useEffect(()=>{
      // if(searchValue === null)
      // {
      //   defaultMovie();
      // }
      // else{
        getMovieRequest(searchValue);
      
      
    }, [searchValue]);

    // useEffect(()=>{
    //   getMovieRequest(searchValue);
    // }, [searchValue]);

   
    const addFavouriteMovie = (movie) =>{
      if(!favourites.includes(movie))
      {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList); 
      }
      // const newFavouriteList = [...favourites, movie];
      // setFavourites(newFavouriteList); 
    }

    const remove = (movie) =>{
      const newFavouriteList = favourites.filter((favourite) =>
        favourite.imdbID !== movie.imdbID
      );
      setFavourites(newFavouriteList);
    };

  return (
    <div className='container-fluid movie-app'>
          <div className='row d-flex align-items-centre mt-4 mb-4'>
              <Heading heading='Movies'/>
              <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className='row' style={{border:"200px"}}>
              <Movielist movies = {movies} handleFavouriteClick={addFavouriteMovie} favouriteComponent={AddFavourites} />
          </div>

          <div className='row d-flex align-items-centre mt-4 mb-4'>
              <Heading heading='Favourites'/>
              
          </div>
          <div className='row' style={{border:"200px"}}>
              <Movielist movies = {favourites} handleFavouriteClick={remove} favouriteComponent={Removefav} />
          </div>
          
    </div>
  )
}

export default App;