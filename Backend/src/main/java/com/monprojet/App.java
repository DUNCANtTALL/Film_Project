package com.monprojet;

import com.monprojet.models.Category;
import com.monprojet.models.Movie;
import com.monprojet.services.CategoryService;
import com.monprojet.services.MovieService;

import java.util.Arrays;
import java.util.List;

public class App 
{
    public static void main(String[] args) {
        // Services
        CategoryService categoryService = new CategoryService();
        MovieService movieService = new MovieService();

        // // Ajouter une catégorie
        Category thriller = categoryService.createCategory("Thriller");
        System.out.println("Catégorie ajoutée : " + thriller.getName() + " (id=" + thriller.getId() + ")");

        // Ajouter un film lié à cette catégorie
        Movie m = movieService.createMovie(
                "harry potter",
                "j.k.rownliing",
                thriller.getId(),
                "A wizard boy",
                "2010-06-01",
                "2010-06-03",
                Arrays.asList("Daniel Radcliffe", "Emma Watson", "Rupert Grint") 
        );
        System.out.println("Film ajouté : " + m.getName() + " (catégorie=" + m.getCategoryID() + ")");

        // Afficher toutes les catégories
        List<Category> categories = categoryService.getAllCategories();
        System.out.println("\nListe des catégories :");
        for (Category c : categories) {
            System.out.println("- " + c.getId() + " : " + c.getName());
        }

        //Afficher tous les films
        List<Movie> movies = movieService.getAllMovies();
        System.out.println("\nListe des films :");
        for (Movie movie : movies) {
            System.out.println("- " + movie.getName() + " (" + movie.getDateDeSortie() + ") -> Catégorie " + movie.getCategoryID());
        }

        //Supprimer catégorie thriller
        categoryService.deleteCategory(thriller.getId());
        System.out.println("\nCatégorie supprimée : " + thriller.getName());

        // // Ajouter une autre catégorie
        Category test = categoryService.createCategory("test");
        System.out.println("Catégorie ajoutée : " + test.getName() + " (id=" + test.getId() + ")");

        // Ajouter un film lié à cette catégorie
        Movie n = movieService.createMovie(
                "lili",
                "j.k.rownliing",
                test.getId(),
                "jhjbhjhb",
                "2010-06-01",
                "2010-06-03",
                Arrays.asList("Daniel Radcliffe", "Emma Watson", "Rupert Grint") 
        );

        System.out.println("Film ajouté : " + n.getName() + " (catégorie=" + n.getCategoryID() + ")");
    }
}
