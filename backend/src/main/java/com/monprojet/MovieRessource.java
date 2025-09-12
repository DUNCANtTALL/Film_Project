package com.monprojet;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Sorts;

import org.bson.Document;

@Path("/movies")
public class MovieRessource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Movie> getMovies() {
        List<Movie> moviesList = new ArrayList<>();
        MongoCollection<Document> collection = MongoDBConnection.getMoviesCollection();

        FindIterable<Document> docs = collection.find()
                .sort(Sorts.orderBy(Sorts.ascending("category"), Sorts.descending("date_de_sortie")));

        for (Document doc : docs) {
            moviesList.add(new Movie( 
                doc.getString("name"),
                doc.getString("realisateur"),
                doc.getString("category"),
                doc.getString("synopsis"),
                doc.getString("date_de_realisation"),
                doc.getString("date_de_sortie"),
                doc.getList("liste_acteurs_principales", String.class)
            ));
        }
        return moviesList;
    }
    
}
