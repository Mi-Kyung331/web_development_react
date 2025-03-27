import { useState, useEffect } from "react";
import"./Home.css";
import Movie from "../components/movie";

export default function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      { loading ? (
        <h1 className="home-loading">로딩 중...</h1>
      ): (
        <div className="movie-grid">
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    
    </div>
  )
}