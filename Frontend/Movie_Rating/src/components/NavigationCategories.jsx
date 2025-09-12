import { Nav, Row, Tab } from "react-bootstrap"
import { 
  Science_Fiction,  
  Amour,
  Humour,
  Horreur,
  Action
} from "../data";

import CardFilm from "./CardFilm"



function NavigationCategories() {
  return (
    <div className='NavigationCategories'>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="mb-5 justify-content-center align-items-center navLink" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        Science Fiction
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second">Humour</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third">Amour</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Horror</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="Fifth">Action</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" >
                    
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Science_Fiction
                          .sort((film1, film2) => new Date(film2.date_sortie) - new Date(film1.date_sortie)) // Tri par date croissante
                          .map((film, index) => (
                            <CardFilm key={index} {...film} />
                          ))
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Humour.sort((a,b) => new Date(b.date_sortie) - new Date(a.date_sortie))
                          .map((film, index) => {
                            return (
                              <CardFilm
                                key={index}
                                {...film}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Amour.sort((a,b) => new Date(b.date_sortie) - new Date(a.date_sortie))
                          .map((film, index) => {
                            return (
                              <CardFilm
                                key={index}
                                {...film}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          Horreur.sort((a,b) => new Date(b.date_sortie) - new Date(a.date_sortie))
                          .map((film, index) => {
                            return (
                              <CardFilm
                                key={index}
                                {...film}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Fifth">
                    <Row>
                        {
                          Action.sort((a,b) => new Date(b.date_sortie) - new Date(a.date_sortie))
                          .map((film, index) => {
                            return (
                              <CardFilm
                                key={index}
                                {...film}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
    </div>
  )
}

export default NavigationCategories