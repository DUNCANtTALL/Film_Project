package com.monprojet;

import java.util.List;
import org.bson.Document;

public class Movie {

    private String movie_id;
    private String category;
    private String name;
    private String realisateur;
    private String synopsis;
    private String date_de_realisation;
    private String date_de_sortie;
    private List<String> liste_acteurs_principales;

    public Movie() {}


    public Movie(String name, String realisateur, String category, String synopsis,
                String date_de_realisation, String date_de_sortie, List<String> liste_acteurs_principales) {
        this.name = name;
        this.realisateur = realisateur;
        this.category = category;
        this.synopsis = synopsis;
        this.date_de_realisation = date_de_realisation;
        this.date_de_sortie = date_de_sortie;
        this.liste_acteurs_principales = liste_acteurs_principales;
    }


    //Constructing a document from MongoDB
    public Movie(Document doc) {
        this.movie_id = doc.getObjectId("movie_id").toHexString();
        this.category = doc.getString("category");
        this.name = doc.getString("name");
        this.realisateur = doc.getString("realisateur");
        this.synopsis = doc.getString("synopsis");
        this.date_de_realisation = doc.getString("date_de_realisation");
        this.date_de_sortie = doc.getString("date_de_sortie");
        this.liste_acteurs_principales = (List<String>) doc.get("liste_acteurs_principales");
    }


    //Getters

    public String getId() {return movie_id;}
    public String getName() {return name;}
    public String getCategory() {return category;}
    public String getRealisateur() {return realisateur;}
    public String getSynopsis() {return synopsis;}
    public String getDateDeRealisation() {return date_de_realisation;}
    public String getDateDeSortie() {return date_de_sortie;}
    public List<String> getListeDesActeurs() {return liste_acteurs_principales;}


    //Setters

    public void setId(String id) {this.movie_id=id;}
    public void setName(String name) {this.name=name;}
    public void setCategory(String category) {this.category=category;}
    public void setRealisateur(String realisateur) {this.realisateur=realisateur;}
    public void setSynopsis(String synopsis) {this.synopsis=synopsis;}
    public void setDateDeRealisation(String date_de_realisation) {this.date_de_realisation=date_de_realisation;}
    public void setDateDeSortie(String date_de_sortie) {this.date_de_sortie=date_de_sortie;}
    public void setLosteDesActeurs(List<String> liste_acteurs_principales) {this.liste_acteurs_principales=liste_acteurs_principales;}


    
}
