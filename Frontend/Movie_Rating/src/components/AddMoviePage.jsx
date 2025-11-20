import { useState, useEffect } from "react";
import { categories as fetchCategories, movies as fetchMovies, addMovie } from "../services/services";
import AddMovie from "../components/AddMovie";

function AddMoviePage() {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadCategories();
    loadMovies();
  }, []);

  const handleAddMovie = async (newMovie) => {
    try {
      const createdMovie = await addMovie(newMovie);
      setMovies((prev) => [...prev, createdMovie]);
      alert("Movie added successfully!");
    } catch (error) {
      alert("Failed to add movie: " + (error.response?.data || error.message));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add a Movie</h1>
      <AddMovie categories={categories} onAddMovie={handleAddMovie} />

      <h2 style={{ marginTop: "30px" }}>Movies List</h2>
     <ul>
  {movies.map((movie) => (
    <li key={movie.movieId}>
      {movie.movieName} ({movie.dateSortie}) - Category: {movie.categoryName}
    </li>
  ))}
</ul>

    </div>
  );
}

export default AddMoviePage;
