import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((ttls,id) => {
            return (
            <div key={id}>{ttls.title} - Movie Length:{ttls.time} Minutes - <ul>Genres: {ttls.genres} </ul></div>
            )
          })} 
    </div>
  );
};

export default Movies;
