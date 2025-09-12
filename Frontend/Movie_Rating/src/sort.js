const films = [
    { nom: "Film A", date_sortie: "2022-01-15" },
    { nom: "Film B", date_sortie: "2020-12-01" }
];

const films_tries = films.sort((film1, film2) => {
    return new Date(film2.date_sortie) - new Date(film1.date_sortie)
}).map((film, index) => film.nom)

console.log(films_tries)