import Card from 'react-bootstrap/Card';


function CardFilm({ ...film}) {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{film.nom}</Card.Title>
          <Card.Text>
            <span><strong>Réalisateur</strong>: {film.realisateur}</span><br/>
            <span><strong>synopsis</strong>: {film.synopsis}</span><br/>
            <span><strong>date_realisation</strong>: {film.date_realisation}</span><br/>
            <span><strong>date_sortie</strong>: {film.date_sortie}</span><br/>
            <span><strong>acteurs</strong>: {film.acteurs.join(', ')}</span><br/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default CardFilm