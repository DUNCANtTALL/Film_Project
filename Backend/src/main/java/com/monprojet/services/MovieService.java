package com.monprojet.services;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.monprojet.db.MongoDBConnection;
import org.bson.Document;
import com.monprojet.models.Movie;

public class MovieService {
    private final MongoCollection<Document> collection;

    public MovieService() {
        MongoDatabase db = MongoDBConnection.getDatabase();
        this.collection = db.getCollection("movies");
    }

    public Movie createMovie(String name, String realisateur, ObjectId category_id, String synopsis,
                String date_de_realisation, String date_de_sortie, List<String> liste_acteurs_principales) {
        Document doc = new Document("name", name)
                .append("realisateur", realisateur)
                .append("category_id", category_id)
                .append("synopsis", synopsis)
                .append("date_de_realisation", date_de_realisation)
                .append("date_de_sortie", date_de_sortie)
                .append("liste_acteurs_principales", liste_acteurs_principales);
        collection.insertOne(doc);

        Movie movie = new Movie(name, realisateur, category_id, synopsis,date_de_realisation,date_de_sortie,liste_acteurs_principales);
        movie.setCategoryID(doc.getObjectId("_id"));
        return movie;
    }

    public List<Movie> getAllMovies() {
        List<Movie> list = new ArrayList<>();
        for (Document d : collection.find()) {
            Movie m = new Movie();
            m.setCategoryID(d.getObjectId("_id"));
            m.setName(d.getString("name"));
            m.setRealisateur(d.getString("realisateur"));
            m.setSynopsis(d.getString("synopsis"));
            m.setDateDeRealisation(d.getString("date_de_realisation"));
            m.setDateDeSortie(d.getString("date_de_sortie"));
            List<String> acteurs = d.getList("liste_acteurs_principales", String.class);
            m.setListeDesActeurs(acteurs != null ? acteurs : new ArrayList<>());
            list.add(m);
        }
        return list;
    }
    
}
