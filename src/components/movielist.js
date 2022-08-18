import React from "react";

const Movielist = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    // const Rating = props.rating;
   return (
    <>
        {props.movies.map((movie,index)=>(
        <div className="image-container d-flex justify-content-start">
            <img src={movie.Poster} alt="movie" onerror="this.onerror=null;this.src='images.png';"></img>
            
            <div onClick={()=> props.handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-start">
                <FavouriteComponent />
                {/* <span>{"\n"}</span>
                <p className="mr-2">movie.imdbRating</p> */}
            </div>
            {/* <div className="rating d-flex align-items-center justify-content-start">
                <Rating />
            </div> */}
        </div>
       ) )}
    </>
   )

}

export default Movielist;