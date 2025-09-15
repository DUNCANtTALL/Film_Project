import axios from "axios";

const API_URL = "http://localhost:8080/movies"; 
// Remplace par ton vrai endpoint backend

// Fonction pour récupérer la liste des films
export async function get_list_of_movies() {
  try {
    const response = await axios.get(API_URL);
    const movies = response.data; // On retourne juste les données
    return movies;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
    throw error; // On relance l'erreur pour que le composant puisse gérer
  }
}
