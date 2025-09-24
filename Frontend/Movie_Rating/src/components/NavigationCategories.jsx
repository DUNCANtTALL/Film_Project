import { Nav, Row, Tab } from "react-bootstrap";
import CardFilm from "./CardFilm";
import { useEffect, useState } from "react";
import { get_list_of_movies, get_list_of_categories } from "../services/services";

function NavigationCategories() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);

 useEffect(() => {
  async function fetchData() {
    try {
      const fetchedMovies = await get_list_of_movies();
      const fetchedCategories = await get_list_of_categories();

      console.log("Fetched Movies:", fetchedMovies); 
      console.log("Fetched Categories:", fetchedCategories); 
      setMovies(fetchedMovies);
      setCategories(fetchedCategories);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, []);
  return (
    <div className="NavigationCategories">
      <Tab.Container id="projects-tabs" defaultActiveKey={categories[0]?._id}>
        <Nav variant="pills" className="mb-5 justify-content-center align-items-center navLink">
          {categories.map((cat) => (
            <Nav.Item key={cat._id}>
              <Nav.Link eventKey={cat._id}>{cat.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {categories.map((cat) => (
            <Tab.Pane eventKey={cat._id} key={cat._id}>
              <Row>
                {movies
                  .filter((movie) => movie.categoryID === cat.category_id)
                  .map((movie, index) => (
                    <CardFilm key={index} {...movie} />
                  ))}
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default NavigationCategories;
