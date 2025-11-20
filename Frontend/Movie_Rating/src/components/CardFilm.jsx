import { Col, Card } from "react-bootstrap";

function CardFilm({ movie }) {
  return (
    
    <Col md={4} className="mb-4">
      <Card style={{ borderRadius: "15px", overflow: "hidden" }}>
        <Card.Img 
          variant="top" 
          src={movie.poster} 
          alt={movie.movieName} 
          style={{ height: "400px", objectFit: "cover" }} 
        />
        <Card.Body>
          <Card.Title>{movie.movieName}</Card.Title>
          <Card.Text>
            <strong>Réalisateur :</strong> {movie.realisateur}<br />
            <strong>Date réalisation :</strong> {movie.dateRealisation}<br />
            <strong>Date sortie :</strong> {movie.dateSortie}<br />
            <strong>Synopsis :</strong> {movie.synopsis}<br />
            <strong>Acteurs :</strong> {movie.listeActeurs?.join(", ")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardFilm;
