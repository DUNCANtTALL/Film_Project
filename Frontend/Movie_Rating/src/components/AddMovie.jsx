import { useState } from "react";

function AddMovie({ categories, onAddMovie }) {
  const [movieName, setMovieName] = useState("");
  const [movieSynopsis, setMovieSynopsis] = useState("");
  const [movieDirector, setMovieDirector] = useState("");
  const [movieActors, setMovieActors] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [dateRealisation, setDateRealisation] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleAddMovie = () => {
    if (
      !movieName.trim() ||
      !movieSynopsis.trim() ||
      !movieDirector.trim() ||
      !movieActors.trim() ||
      !movieReleaseDate.trim() ||
      !selectedCategory ||
      !posterUrl.trim()
    ) {
      alert("All fields are required, including poster URL");
      return;
    }

    const categoryName =
      categories.find((c) => c.categoryID === parseInt(selectedCategory))
        ?.categoryName || "";

    const newMovie = {
      categoryId: parseInt(selectedCategory),
      categoryName: categoryName,
      movieName: movieName,
      realisateur: movieDirector,
      poster: posterUrl,
      dateRealisation: dateRealisation || new Date().toISOString().split("T")[0],
      dateSortie: movieReleaseDate,
      synopsis: movieSynopsis,
      listeActeurs: movieActors.split(",").map((a) => a.trim()),
    };

    onAddMovie(newMovie);
  };

  return (
    <div className="form-container">
      <h2>Add Movie</h2>

      <div className="form-group">
        <label>Movie Name</label>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Synopsis</label>
        <textarea
          value={movieSynopsis}
          onChange={(e) => setMovieSynopsis(e.target.value)}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label>Director</label>
        <input
          type="text"
          value={movieDirector}
          onChange={(e) => setMovieDirector(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Actors (comma-separated)</label>
        <input
          type="text"
          value={movieActors}
          onChange={(e) => setMovieActors(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Release Date</label>
        <input
          type="date"
          value={movieReleaseDate}
          onChange={(e) => setMovieReleaseDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Realisation Date</label>
        <input
          type="date"
          value={dateRealisation}
          onChange={(e) => setDateRealisation(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.categoryID} value={cat.categoryID}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Poster URL</label>
        <input
          type="text"
          value={posterUrl}
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </div>

      <button className="btn-submit" onClick={handleAddMovie}>
        Add Movie
      </button>
    </div>
  );
}

export default AddMovie;
