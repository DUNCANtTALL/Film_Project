import Card from 'react-bootstrap/Card';


function CardFilm({ ...film }) {
  return (
    <Card style={{ width: '20rem'}}>
      <Card.Body>
        <Card.Title>{film.name}</Card.Title>
        <Card.Text>
          <span><strong>Réalisateur</strong>: {film.realisateur}</span><br />
          <span><strong>Synopsis</strong>: {film.synopsis}</span><br />
          <span><strong>Date de réalisation</strong>: {film.dateDeRealisation}</span><br />
          <span><strong>Date de sortie</strong>: {film.dateDeSortie}</span><br />
          <span><strong>Acteurs</strong>: {film.listeDesActeurs.join(', ')}</span><br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export default CardFilm