function CardFilm({ name, synopsis, realisateur, listeDesActeurs, dateDeSortie }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{synopsis}</p>
      <p><strong>Director:</strong> {realisateur}</p>
      <p><strong>Actors:</strong> {listeDesActeurs.join(", ")}</p>
      <p><strong>Release Date:</strong> {dateDeSortie}</p>
    </div>
  );
}

export default CardFilm;