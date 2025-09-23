package com.monprojet.ressources;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import com.monprojet.models.Movie;
import com.monprojet.services.MovieService;
import java.util.List;

@Path("/movies")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MovieRessource {
    private final MovieService service = new MovieService();

    @POST
    public Response createMovie(Movie movie) {
        Movie created = service.createMovie(
                movie.getName(),
                movie.getRealisateur(),
                movie.getCategoryID(),
                movie.getSynopsis(),
                movie.getDateDeRealisation(),
                movie.getDateDeSortie(),
                movie.getListeDesActeurs()
                
        );
        return Response.status(Response.Status.CREATED).entity(created).build();
    }

    @GET
    public List<Movie> getAllMovies() {
        return service.getAllMovies();
    }
}
