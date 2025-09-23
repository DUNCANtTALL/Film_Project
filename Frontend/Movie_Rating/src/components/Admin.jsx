import React from 'react'
import AddCategorie from './AddCategorie'
import DeleteCategory from './deleteCategorie'

function Admin() {
  return (
    <div className='text-white'>
        <AddCategorie/>
        <DeleteCategory/>
    </div>
  )
}

export default Admin