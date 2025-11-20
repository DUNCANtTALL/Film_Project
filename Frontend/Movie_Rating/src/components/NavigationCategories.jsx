
import { Nav, Row, Tab } from "react-bootstrap";
import CardFilm from "./CardFilm";
import { movies, categories} from "../services/services";
import { useEffect, useState } from "react";

function NavigationCategories() {
  const [categorieslist, setCategorieslist] = useState([]);
  const [movieslist, setMovieslist] = useState([]);

  useEffect(()=>{
            movies().
            then((data =>{
                setMovieslist(data);
            }))

            categories().
            then((data =>{
                setCategorieslist(data);
            }))
  },[])
  

  return (
    <div className="NavigationCategories">
      <Tab.Container id="projects-tabs" defaultActiveKey={categorieslist[0]}>
        <Nav
          variant="pills"
          className="mb-5 justify-content-center align-items-center navLink"
          id="pills-tab"
        >
          {categorieslist.map((cat, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={cat.categoryName}>{cat.categoryName}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {categorieslist.map((cat, index) => (
            <Tab.Pane eventKey={cat.categoryName} key={index}>
              <Row className="justify-content-center">
                {
                  movieslist.filter(movie => movie.categoryName === cat.categoryName)
                  .sort(
                    (a, b) => new Date(b.dateSortie) - new Date(a.dateSortie) // tri croissant
                  )
                  .map((movie, idx) => (
                    <CardFilm key={idx} movie={movie} />
                  ))
                  
                }
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>

      </Tab.Container>
    </div>
  );
}

export default NavigationCategories;
