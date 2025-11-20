import { Col } from "react-bootstrap";



function CardFilm({ movie }) {;
  console.log(movie);
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={movie.poster} alt={movie.movieName} style={{ width: "100%", borderRadius: "30px" }} />
        <div className="proj-txtx">
          <h4>{movie.movieName}</h4>
          <span><b>Réalisateur :</b> {movie.realisateur}</span><br />
          <span><b>Date réalisation :</b> {movie.dateRealisation}</span><br />
          <span><b>Date sortie :</b> {movie.dateSortie}</span><br />
          <span><b>Synopsis :</b> {movie.synopsis}</span><br />
          <span><b>Acteurs :</b> {movie.listeActeurs?.join(", ")}</span>
        </div>
      </div>
    </Col>
  );
}

export default CardFilm;