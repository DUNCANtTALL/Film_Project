// mongosh script - run with:
// mongosh "mongodb://localhost:27017/" ./Backend/scripts/seed-others-mongodb.js

// This script inserts/updates users, reviews and watchlists only.
// It will NOT drop or modify existing `movies` or `categories` collections.

const conn = new Mongo();
const db = conn.getDB("film_project");
print("Using database:", db.getName());

// Users to upsert
const users = [
  { id: 1, isAdmin: true },
  { id: 2, isAdmin: false }
];

users.forEach(u => {
  const res = db.users.updateOne({ id: u.id }, { $setOnInsert: u }, { upsert: true });
  if (res.upsertedCount > 0) print(`Inserted user ${u.id}`);
  else print(`User ${u.id} already exists`);
});

// Reviews to insert if not exists (unique by userId + movie_id + content)
const reviews = [
  { userId: 2, movie_id: 1, content: "Amazing film with a brilliant concept." },
  { userId: 2, movie_id: 2, content: "Non-stop action, visually stunning." }
];

reviews.forEach(r => {
  const exists = db.reviews.findOne({ userId: r.userId, movie_id: r.movie_id, content: r.content });
  if (!exists) {
    db.reviews.insertOne(r);
    print(`Inserted review for user ${r.userId} movie ${r.movie_id}`);
  } else {
    print(`Review already exists for user ${r.userId} movie ${r.movie_id}`);
  }
});

// Watchlists: upsert by userID, add movies if not present
const watchlists = [
  { userID: 2, movies: [ { movie_id: 1, movie_name: "Inception" } ] }
];

watchlists.forEach(wl => {
  const existing = db.watchlists.findOne({ userID: wl.userID });
  if (!existing) {
    db.watchlists.insertOne(wl);
    print(`Inserted watchlist for user ${wl.userID}`);
  } else {
    // Add movies to existing watchlist using $addToSet
    wl.movies.forEach(m => {
      const res = db.watchlists.updateOne({ userID: wl.userID }, { $addToSet: { movies: m } });
      if (res.modifiedCount > 0) print(`Added movie ${m.movie_id} to watchlist ${wl.userID}`);
      else print(`Movie ${m.movie_id} already in watchlist ${wl.userID}`);
    });
  }
});

print('Seeding users/reviews/watchlists complete.');
printjson(db.getCollectionNames());
