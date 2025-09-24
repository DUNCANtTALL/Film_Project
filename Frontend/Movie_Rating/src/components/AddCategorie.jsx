import { useEffect, useState } from "react";
import { Tab, Nav, Row } from "react-bootstrap";
import CardFilm from "./CardFilm";
import { get_list_of_movies, get_list_of_categories } from "../services/services";

function NavigationCategories() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await get_list_of_movies();
        const fetchedCategories = await get_list_of_categories();

        setMovies(fetchedMovies);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (categories.length === 0) return <p>Loading...</p>;

  return (
    <Tab.Container id="categories-tabs" defaultActiveKey={categories[0].id.timestamp}>
      <Nav variant="pills" className="mb-3 justify-content-center">
        {categories.map((category) => (
          <Nav.Item key={category.id.timestamp}>
            <Nav.Link eventKey={category.id.timestamp}>{category.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content>
        {categories.map((category) => (
          <Tab.Pane eventKey={category.id.timestamp} key={category.id.timestamp}>
            <Row>
              {movies
                .filter((movie) => movie.categoryID.timestamp === category.id.timestamp)
                .map((movie) => (
                  <CardFilm key={movie.categoryID.timestamp + movie.name} {...movie} />
                ))}
            </Row>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
}

export default NavigationCategories;
