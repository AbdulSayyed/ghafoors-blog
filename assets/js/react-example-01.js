import React, { useState } from 'react';

const movies = [

  { title: 'The Shawshank Redemption', genre: 'Drama' },
  { title: 'The Godfather', genre: 'Crime' },
  { title: 'Pulp Fiction', genre: 'Crime' },
  { title: 'The Dark Knight', genre: 'Action' },
  { title: 'Fight Club', genre: 'Drama' },
];

const MovieRecommendationApp = () => {
  const [genre, setGenre] = useState('');
  const [recommendation, setRecommendation] = useState('');


  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleRecommendation = () => {
    const moviesByGenre = movies.filter((movie) => movie.genre === genre);
    const randomIndex = Math.floor(Math.random() * moviesByGenre.length);
    const recommendedMovie = moviesByGenre[randomIndex];

    if (recommendedMovie) {
      setRecommendation(recommendedMovie.title);
    } else {
      setRecommendation('No movies found for the selected genre');
    }
  };

  return (
    <div>
      <h1>Movie Recommendation App</h1>
      <label htmlFor="genre">Select a genre:</label>
      <select id="genre" value={genre} onChange={handleGenreChange}>
        <option value="">-- Select --</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Action">Action</option>
      </select>

      <button onClick={handleRecommendation}>Get Recommendation</button>
      {recommendation && (<p>Recommended Movie: {recommendation}</p>)}
    </div>
  );
};

export default MovieRecommendationApp;