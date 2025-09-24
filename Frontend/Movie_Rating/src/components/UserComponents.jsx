import React from 'react'
import NavigationCategories from './NavigationCategories'
import Header from './Header';

function UserComponents({movies}) {

  //console.log(typeof(movies)); object
  //console.log(movies.movies); //array 
  return (
    <div>
      <Header/>
      <NavigationCategories movies={movies}/>
    </div>
  )
}

export default UserComponents