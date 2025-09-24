import { Nav, Row, Tab } from "react-bootstrap"
import CardFilm from "./CardFilm"



function NavigationCategories({movies}) {

  const categories = [...new Set(movies.map((m) => m.category))]// ... transforme un set en array

  return (
    <div className='NavigationCategories'>
        <Tab.Container id="projects-tabs" defaultActiveKey={categories[0]}>
          <Nav variant="pills" className="mb-5 justify-content-center align-items-center navLink" id="pills-tab">
            {categories.map((cat, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={cat}>{cat}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
            <Tab.Content>
              {categories.map((cat, index) => (
                <Tab.Pane eventKey={cat} key={index}>
                    <div>
                      <Row>
                        {movies
                          .filter((movie) => movie.category === cat)
                          .map((movie, iex) => (
                            <CardFilm key={iex} {...movie} />
                          ))}
                      </Row>
                    </div>
                  
                </Tab.Pane>
              ))}
            </Tab.Content>
</Tab.Container>

    </div>
  )
}

export default NavigationCategories