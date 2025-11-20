// mongosh script - run with:
// mongosh "mongodb://localhost:27017/" ./Backend/scripts/seed-mongodb.js

// This script creates collections and inserts sample documents matching the Java models.
// It is written for the mongosh / mongo shell environment.

const conn = new Mongo();
const db = conn.getDB("film_project");

print("Using database:", db.getName());

// Drop existing collections (safe for local development)
const toDrop = ["categories", "movies", "users", "reviews", "watchlists"];
toDrop.forEach(c => {
  if (db.getCollectionNames().includes(c)) {
    print(`Dropping collection ${c}`);
    db[c].drop();
  }
});

// Create categories
print("Creating categories...");
const categories = [
  { category_id: 1, category_name: "Science-Fiction" },
  { category_id: 2, category_name: "Humour" },
  { category_id: 3, category_name: "Amour" },
  { category_id: 4, category_name: "Horror" },
  { category_id: 5, category_name: "Action" }
];
db.categories.insertMany(categories);

// Create movies
print("Creating movies...");
const movies = [
  {
    movie_id: 1,
    category_id: 1,
    category_name: "Science-Fiction",
    movie_name: "Inception",
    realisateur: "Christopher Nolan",
    poster: "https://example.com/posters/inception.jpg",
    date_de_realisation: "2010-06-01",
    date_de_sortie: "2010-07-16",
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    liste_des_acteurs_principales: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    movie_id: 2,
    category_id: 5,
    category_name: "Action",
    movie_name: "Mad Max: Fury Road",
    realisateur: "George Miller",
    poster: "https://example.com/posters/madmax.jpg",
    date_de_realisation: "2012-10-01",
    date_de_sortie: "2015-05-15",
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrant in search for her homeland.",
    liste_des_acteurs_principales: ["Tom Hardy", "Charlize Theron"]
  }
];

db.movies.insertMany(movies);

// Create users
print("Creating users...");
const users = [
  { id: 1, isAdmin: true },
  { id: 2, isAdmin: false }
];

db.users.insertMany(users);

// Create reviews
print("Creating reviews...");
const reviews = [
  { userId: 2, movie_id: 1, content: "Amazing film with a brilliant concept." },
  { userId: 2, movie_id: 2, content: "Non-stop action, visually stunning." }
];

db.reviews.insertMany(reviews);

// Create watchlists
print("Creating watchlists...");
const watchlists = [
  { userID: 2, movies: [ { movie_id: 1, movie_name: "Inception" } ] }
];

db.watchlists.insertMany(watchlists);

// Create helpful indexes
print("Creating indexes...");
db.movies.createIndex({ movie_id: 1 }, { unique: true });
db.categories.createIndex({ category_id: 1 }, { unique: true });
db.users.createIndex({ id: 1 }, { unique: true });
db.reviews.createIndex({ userId: 1 });
db.reviews.createIndex({ movie_id: 1 });

print("Seeding complete.");
printjson(db.getCollectionNames());
