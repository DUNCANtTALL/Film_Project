package com.monprojet.models;

import java.util.List;

import org.bson.types.ObjectId;

public class Movie {
    private String movie_id;
    private ObjectId category_id;
    private String name;
    private String realisateur;
    private String synopsis;
    private String date_de_realisation;
    private String date_de_sortie;
    private List<String> liste_acteurs_principales;

    public Movie() {}


    public Movie(String name, String realisateur, ObjectId category_id, String synopsis,
                String date_de_realisation, String date_de_sortie, List<String> liste_acteurs_principales) {
        this.name = name;
        this.realisateur = realisateur;
        this.category_id = category_id;
        this.synopsis = synopsis;
        this.date_de_realisation = date_de_realisation;
        this.date_de_sortie = date_de_sortie;
        this.liste_acteurs_principales = liste_acteurs_principales;
    }

    //Getters

    public String getId() {return movie_id;}
    public String getName() {return name;}
    public ObjectId  getCategoryID() {return category_id;}
    public String getRealisateur() {return realisateur;}
    public String getSynopsis() {return synopsis;}
    public String getDateDeRealisation() {return date_de_realisation;}
    public String getDateDeSortie() {return date_de_sortie;}
    public List<String> getListeDesActeurs() {return liste_acteurs_principales;}


    //Setters

    public void setId(String id) {this.movie_id=id;}
    public void setName(String name) {this.name=name;}
    public void setCategoryID(ObjectId category) {this.category_id=category;}
    public void setRealisateur(String realisateur) {this.realisateur=realisateur;}
    public void setSynopsis(String synopsis) {this.synopsis=synopsis;}
    public void setDateDeRealisation(String date_de_realisation) {this.date_de_realisation=date_de_realisation;}
    public void setDateDeSortie(String date_de_sortie) {this.date_de_sortie=date_de_sortie;}
    public void setListeDesActeurs(List<String> liste_acteurs_principales) {this.liste_acteurs_principales=liste_acteurs_principales;}

}
