import React, { useState } from "react";
import InputCategorie from "./InputCategorie";
import { Col } from "react-bootstrap";

function AddCategorie() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  // film temporaire en cours de saisie
  const [film, setFilm] = useState({
    name: "",
    realisateur: "",
    dateDeRealisation: "",
    dateDeSortie: "",
    synopsis: "",
    listeDesActeurs: [],
  });

  const [films, setFilms] = useState([]);

  // Ajouter un film temporaire à la liste
  const handleAddFilm = () => {
    if (!film.name) return; // au moins le nom requis
    setFilms([...films, film]);
    setFilm({
        name: "",
        realisateur: "",
        dateDeRealisation: "",
        dateDeSortie: "",
        synopsis: "",
        listeDesActeurs: [],
    });
  };

  // Créer la catégorie avec ou sans films
  const handleCreateCategory = () => {

    const newCategory = {
      name: categoryName,
      films: [...films],
    };

    setCategories([...categories, newCategory]);

    // reset
    setCategoryName("");
    setFilms([]);
  };

  return (
    <div className="text-white p-4">

      {/* Création catégorie */}
      <Col>
        <InputCategorie type={"text"} placeholder={"Nom de la catégorie"} value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <button className="ms-3" onClick={handleCreateCategory}>Créer la catégorie</button>
      </Col>
      

      <h3>Ajouter un film (optionnel)</h3>

      <Col>
        {/* Ajout d’un film optionnel */}
        <InputCategorie type={"text"} placeholder={"Nom du film"} value={film.name} onChange={(e) => setFilm({ ...film, name: e.target.value })}/>

        <InputCategorie type={"text"} placeholder={"Réalisateur"} value={film.realisateur} onChange={(e) => setFilm({ ...film, director: e.target.value })}/>

        
        <InputCategorie
            type="text"
            placeholder="Date de sortie"
            value={film.releaseDate}
            onChange={(e) => setFilm({ ...film, releaseDate: e.target.value })}
            dynamicDate={true}
            />

        <InputCategorie type={"text"} placeholder={"Date de realisation"} value={film.dateDeSortie} onChange={(e) => setFilm({ ...film, releaseDate: e.target.value })} dynamicDate={true}/>

        <InputCategorie type={"text"} placeholder={"Synopsis"} value={film.synopsis} onChange={(e) => setFilm({ ...film, synopsis: e.target.value })}/>

        <InputCategorie type={"text"} placeholder={"Acteurs principaux"} value={film.listeDesActeurs} onChange={(e) => setFilm({ ...film, actors: e.target.value })}/>

        <button className="ms-3"onClick={handleAddFilm}>Ajouter ce film</button>
      </Col>
      

    </div>
  );
}

export default AddCategorie;
