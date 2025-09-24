import React, { useState } from "react";
import InputCategorie from "./InputCategorie";
import { Col } from "react-bootstrap";

function DeleteCategory({movies, setMovies}) {

  const [name, setName] = useState([]);

  const handleDeleteCategory = () => {
  setMovies(movies.filter(movie => movie.category !== name));
  setName("");
  console.log(movies);
  };


  return (
    
    <div className="p-4 deleteCategorie">
        <h3 className="ps-4">Supprimer une catégorie</h3>
        <Col>
            <InputCategorie type={"text"} placeholder={"Supprimez une catégorie"} value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="buttonCategorie" onClick={handleDeleteCategory}>
                Supprimer
            </button>
        </Col>
    </div>
  );
}

export default DeleteCategory;
