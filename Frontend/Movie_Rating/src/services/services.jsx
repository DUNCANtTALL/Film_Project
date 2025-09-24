import axios from "axios";

const API_URL = "http://localhost:8080/n/api/movies"; // Correct API endpoint

// Function to fetch the list of movies
export async function get_list_of_movies() {
  try {
    const response = await axios.get(API_URL);
    const movies = response.data; // Return the data
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error for the component to handle
  }
}

export async function get_list_of_categories() {
  try {
    const response = await axios.get("http://localhost:8080/n/api/categories");
    const movies = response.data; // Return the data
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error for the component to handle
  }
}
