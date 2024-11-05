import React, { useState, useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { Nav, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

import axios from "axios";

function Home() {
    const user = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.error);

    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request to API endpoint
        axios
            .get("http://localhost:3001/api/game/")
            .then((response) => {
                const formattedData = response.data.map((game) => ({
                    ...game,
                }));
                setData(formattedData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <PageContainer>
            <section>
                <Container>
                    <Row lg={4}>
                        {data.map((game, index) => (
                            <div>
                                <Col>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <Card.Header className={classes.cardHeader}>
                                                <div>
                                                    <h3 style={{ marginBottom: "0" }}>
                                                        {game.section_id}
                                                    </h3>
                                                </div>
                                            </Card.Header>
                                            <Card.Text className={classes.cardBody}>
                                                <Row style={{ maxWidth: '98%', marginBottom: '4px' }}>
                                                    <Col style={{ display: 'flex', width: '2px' }}>
                                                        <img
                                                            src={`${game.away_team_logo}`}
                                                            alt="Away Logo"
                                                            className={classes.teamLogo}
                                                        ></img>
                                                    </Col>
                                                    <Col className={classes.homeText}>
                                                        <div>{game.away_team}</div>
                                                    </Col>
                                                    {game.away_team_score ? (
                                                        <Col className={classes.scoreText}>
                                                            <div>{game.away_team_score}</div>
                                                        </Col>
                                                    ) : <Col style={{ flexGrow: 1 }}>
                                                    </Col>}

                                                </Row>
                                                <Row style={{ maxWidth: '98%' }}>
                                                    <Col style={{ display: 'flex' }}>
                                                        <img
                                                            src={`${game.home_team_logo}`}
                                                            alt="Home Logo"
                                                            className={classes.teamLogo}
                                                        ></img>
                                                    </Col>
                                                    <Col className={classes.homeText}>
                                                        <div>{game.home_team}</div>
                                                    </Col>
                                                    {game.away_team_score ? (
                                                        <Col className={classes.scoreText}>
                                                            <div>{game.home_team_score}</div>
                                                        </Col>
                                                    ) : <Col style={{ flexGrow: 1 }}>
                                                    </Col>}
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer className={classes.cardFooter}>
                                                <Nav.Link as={Link} to={`/game/${game.id}`}>
                                                    <Button className={classes.cardButton}>
                                                        Squares
                                                    </Button>
                                                </Nav.Link>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        ))}
                    </Row>
                </Container>
            </section>
        </PageContainer>
    );
}

export default Home;
