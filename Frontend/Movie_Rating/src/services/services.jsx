import axios from "axios";

const movies_url= "http://localhost:8080/backend/api/movies";
const categories_url = "http://localhost:8080/backend/api/categories"; 
const API_BASE_URL = "http://localhost:8080/backend/api/reviews/movie";


export async function movies() {
  try {
    const response = await axios.get(movies_url);
    const movies = response.data;
    return movies;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
    throw error;
    }
}

export async function categories() {
  try {
    const response = await axios.get(categories_url);
    const categories = response.data;
    return categories;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des categories :", error);
    throw error;
  }
}

export async function addMovie(movie) {
  try {
    const response = await axios.post(movies_url, movie, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
    throw error;
  }
}

export async function DeleteCategory(category_name) {
  try {
    const response = await axios.post("http://localhost:8080/backend/api/categories/delete",
      { name: category_name },   
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
}

export async function AddReview(movieId, reviewPayload) {
  try {
    const response = await axios.post("http://localhost:8080/backend/api/reviews",
      reviewPayload,   
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
}
export async function GetMovieReviews(movieId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for movie ID ${movieId}:`, error);
    throw error;
  }
}
