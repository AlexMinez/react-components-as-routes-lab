import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((dirs,id) => {
          return (
            <div key={id}>{dirs.name} <ul>{dirs.movies} </ul> </div>
          )
        })}
    </div>
  );
}

export default Directors
