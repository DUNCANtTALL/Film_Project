import React from 'react'
import AddCategorie from './AddCategorie'
import DeleteCategory from './deleteCategorie'
import { Col, Row } from 'react-bootstrap'
function Admin({movies, setInitialMovies}) {

  console.log(movies)
  return (
    
    <div className='text-white Admin'>
        <Row>
          <AddCategorie movies={movies} setMovies={setInitialMovies}/>
          <DeleteCategory movies={movies} setMovies={setInitialMovies}/>
        </Row>
    </div>
  )
}

export default Admin