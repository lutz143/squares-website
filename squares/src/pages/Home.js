import React, { useState, useEffect } from 'react';
import PageContainer from "../containers/PageContainer";
import { Link } from 'react-router-dom';
import classes from "./Home.module.css";
import { Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import axios from 'axios';

function Home() {
  const user = useSelector((state) => state.auth.user)
  const error = useSelector((state) => state.auth.error)

  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to API endpoint
    axios.get('http://localhost:3001/api/game/')
      .then(response => {
        const formattedData = response.data.map((game) => ({
          ...game,
        }));
        setData(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <PageContainer>
      <section>
        <Container>
          <Row lg={4}>
            {data.map((game, index) =>
              <div>
                <Col>
                  <Card className='mb-3'>
                    <Card.Body>
                      <Card.Header className={game.NOM_CPS_Float>game.previousCloseFloat ? classes.cardHeaderGood : classes.cardHeader}>
                        <div>
                          <h3 style={{marginBottom: '0'}}>{game.Ticker}</h3>
                        </div>
                      </Card.Header>
                      <Card.Text className={classes.cardBody}>
                        <div style={{fontStyle: 'italic', fontSize: '10px'}}>Assessment Date: {game.Assessment_Date}</div>
                        <Col>
                          <div>Away Team: {game.away_team}</div>
                          <div>{game.away_team_score}</div>
                        </Col>
                        <Col>
                          <div>Home Team: {game.home_team}</div>
                          <div>{game.home_team_score}</div>
                        </Col>
                      </Card.Text>
                      <Card.Footer className={classes.cardFooter}>
                        <Nav.Link as={Link} to={`/game/${game.section_id}`}>
                          <Button className={classes.cardButton}>
                            Squares
                          </Button>
                        </Nav.Link>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </div>)}
            </Row>
        </Container>
      </section>
    </PageContainer>
  );
}

export default Home;