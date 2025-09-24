<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Tab, Nav, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
import { get_list_of_movies, get_list_of_categories } from "../services/services";

function NavigationCategories() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await get_list_of_movies();
        const fetchedCategories = await get_list_of_categories();

        setMovies(fetchedMovies);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (categories.length === 0) return <p>Loading...</p>;

  return (
    <Tab.Container id="categories-tabs" defaultActiveKey={categories[0].id.timestamp}>
      <Nav variant="pills" className="mb-3 justify-content-center">
        {categories.map((category) => (
          <Nav.Item key={category.id.timestamp}>
            <Nav.Link eventKey={category.id.timestamp}>{category.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content>
        {categories.map((category) => (
          <Tab.Pane eventKey={category.id.timestamp} key={category.id.timestamp}>
            <Row>
              {movies
                .filter((movie) => movie.categoryID.timestamp === category.id.timestamp)
                .map((movie) => (
                  <CardFilm key={movie.categoryID.timestamp + movie.name} {...movie} />
                ))}
            </Row>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
=======
import React, { useState } from "react";
import InputCategorie from "./InputCategorie";
import { Col, Fade } from "react-bootstrap";
import Swal from "sweetalert2";

function AddCategorie({movies,setMovies}) {
  const [categoryName, setCategoryName] = useState("");
  const [boolFilm, setBoolFilm] = useState(false);
  // film temporaire en cours de saisie
  const [film, setFilm] = useState({
    name: "",
    realisateur: "",
    dateDeRealisation: "",
    dateDeSortie: "",
    synopsis: "",
    listeDesActeurs: [],
  });

  // Ajouter un film temporaire à la liste
  const handleAddFilmToCategory = () => {
  setMovies(movies.map(movie => {
    if (movie.category === categoryName && movie.name === "notError") {
      return {
        ...movie, // garder la categoryName déja ajoutée
        name: film.name,
        realisateur: film.realisateur,
        dateDeRealisation: film.dateDeRealisation,
        dateDeSortie: film.dateDeSortie,
        synopsis: film.synopsis,
        listeDesActeurs: film.listeDesActeurs.split(',').map(actor => actor.trim())
      
      };
    }
    return movie; // sinon on ne touche pas
  }));
  setCategoryName("");

  // reset du film si tu veux
  setFilm({
    name: "",
    realisateur: "",
    dateDeRealisation: "",
    dateDeSortie: "",
    synopsis: "",
    listeDesActeurs: []
  });
  setBoolFilm(false);
};


  // Créer la catégorie avec ou sans films
  const handleCreateCategory = () => {

    if (categoryName) {
      Swal.fire({
        title: 'Ajouter un film à cette catégorie ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        setBoolFilm(true);
        setMovies([...movies,{category: categoryName, name:"notError"}])
      } else {
        setBoolFilm(false);
        setMovies([...movies,{category: categoryName, name:"error"}])
        //setMovies([...movies,{category: categoryName}])
      }
      //console.log(movies.filter((movie) => movie.category === categoryName));
    })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Le nom de la catégorie est requis !',
      })
    }
    
    
  };

  return (
    <div className="p-4 addCategorie">

      {/* Création catégorie */}
      <h3 className="ps-4">Ajouter une catégorie</h3>
      <Col>
        <InputCategorie type={"text"} placeholder={"Nom de la catégorie"} value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
        <button className="ms-3" onClick={handleCreateCategory}>Créer la catégorie</button>
      </Col>
      
      {
        boolFilm && (
          <Col>
        {/* Ajout d’un film optionnel */}
        <InputCategorie type={"text"} placeholder={"Nom du film"} value={film.name} onChange={(e) => setFilm({ ...film, name: e.target.value })}/>

        <InputCategorie type={"text"} placeholder={"Réalisateur"} value={film.realisateur} onChange={(e) => setFilm({ ...film, realisateur: e.target.value })}/>

        
        <InputCategorie
            type="text"
            placeholder="Date de sortie"
            value={film.dateDeSortie}
            onChange={(e) => setFilm({ ...film, dateDeSortie: e.target.value })}
            dynamicDate={true}
            />

        <InputCategorie type={"text"} placeholder={"Date de realisation"} value={film.dateDeRealisation} onChange={(e) => setFilm({ ...film, dateDeRealisation: e.target.value })} dynamicDate={true}/>

        <InputCategorie type={"text"} placeholder={"Synopsis"} value={film.synopsis} onChange={(e) => setFilm({ ...film, synopsis: e.target.value })}/>

        <InputCategorie type={"text"} placeholder={"Acteurs principaux"} value={film.listeDesActeurs} onChange={(e) => setFilm({ ...film, listeDesActeurs: e.target.value })}/>

        <button className="ms-3"onClick={handleAddFilmToCategory}>Ajouter ce film</button>
      </Col>
        )
      }

    </div>
>>>>>>> a5686edce210746df9bd6c9e1cc53e2133455d50
  );
}

export default NavigationCategories;
