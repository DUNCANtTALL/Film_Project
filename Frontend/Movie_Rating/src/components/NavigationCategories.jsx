import { Nav, Row, Tab } from "react-bootstrap"
/*import { 
  Science_Fiction,  
  Amour,
  Humour,
  Horreur,
  Action
} from "../data";*/

import movies from "../data";
import CardFilm from "./CardFilm"
import { useEffect, useState } from "react";



function NavigationCategories() {

  const [actions,SetActions] = useState([]);
  const [amour,SetAmour] = useState([]);
  const [horror,SetHorror] = useState([]);
  const [humour,SetHumour] = useState([]);
  const [sciencefiction,SetSciencefiction] = useState([]);

  useEffect(() => {
    SetActions(movies.filter((movie, index) => movie.category === "Action"))
    SetAmour(movies.filter((movie, index) => movie.category === "Amour"))
    SetHorror(movies.filter((movie, index) => movie.category === "Horror"))
    SetHumour(movies.filter((movie, index) => movie.category === "Humour"))
    SetSciencefiction(movies.filter((movie, index) => movie.category === "Science-Fiction"))
  },[movies])

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
                          actions.map((movie, index) =>{
                            return(
                              <CardFilm key={index}
                              {...movie}/>
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          humour.map((movie, index) =>{
                            return(
                              <CardFilm key={index}
                              {...movie}/>
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {amour.map((movie, index) =>{
                            return(
                              <CardFilm key={index}
                              {...movie}/>
                            )
                          })}
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {horror.map((movie, index) =>{
                            return(
                              <CardFilm key={index}
                              {...movie}/>
                            )
                          })}
                    </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Fifth">
                    <Row>
                        {sciencefiction.map((movie, index) =>{
                            return(
                              <CardFilm key={index}
                              {...movie}/>
                            )
                          })}
                    </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
    </div>
  )
}

export default NavigationCategories