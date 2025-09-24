import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import UserComponents from "./components/userComponents";
import movies from "./data";

function App() {

  const [initialMovies, setInitialMovies] = useState(movies)
  
  return (
      <Router>
        <Routes>
          <Route path="/user" element={<UserComponents movies={initialMovies}/>} />
          <Route path="/admin" element={<Admin movies={initialMovies} setInitialMovies={setInitialMovies}/>} />
        </Routes>

      </Router>
  );
}

export default App;
