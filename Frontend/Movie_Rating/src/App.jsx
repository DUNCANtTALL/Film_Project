import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCategorie from "./components/AddCategorie";
import NavigationCategories from "./components/NavigationCategories";
import AddMoviePage from "./components/AddMoviePage";
import "./App.css"; // 👈 import CSS for navbar styles
import DeleteCategoryPage from "./components/deleteCategorie";

function App() {
  return (
    <Router>
      <div>
        {/* Top Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">Movie App</div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-category">Add Category</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>

            <li>
              <Link to="/delete-categorie">Delete Categorie</Link>
            </li>
          </ul>
        </nav>

        {/* Page Routes */}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<NavigationCategories />} />
            <Route
              path="/add-category"
              element={
                <AddCategorie
                  onAddCategory={(category) =>
                    console.log("Category added:", category)
                  }
                />
              }
            />
            <Route path="/add-movie" element={<AddMoviePage />} />
            <Route path="/delete-categorie" element={<DeleteCategoryPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
