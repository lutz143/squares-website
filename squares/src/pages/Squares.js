// ColorGrid.js
import axios from "axios";
import PageContainer from "../containers/PageContainer";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./Squares.module.css";
import { Nav, Button, Card, Container, Row, Col } from "react-bootstrap";

const Squares = () => {
  // Initialize state for colors
  const [colors, setColors] = useState(Array(100).fill("white"));
  const [game, setGame] = useState([]);

  // Initialize state for row and column headers
  const [rowHeaders, setRowHeaders] = useState([]);
  const [colHeaders, setColHeaders] = useState([]);
  // Coordinates to highlight
  const [highlightedCoords, setHighlightedCoords] = useState({
    row: 5,
    col: 1,
  });
  const { id } = useParams();

  // useEffect to fetch comments initially and whenever the component mounts or comments are posted
  useEffect(() => {
    fetchGame();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const fetchGame = async () => {
    // Make a GET request to API endpoint by stock ID
    axios
      .get(`http://localhost:3001/api/game/${id}`)
      .then((response) => {
        setGame(response.data).then((response) => {
          console.log("second promise");
          console.log(game);
          const awayTeamLastDigit = game.away_team_score % 10;
          const homeTeamLastDigit = game.home_team_score % 10;
          setHighlightedCoords({ awayTeamLastDigit, homeTeamLastDigit });
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Function to generate an array of unique, random numbers between 0 and 9
  const generateUniqueRandomNumbers = (count) => {
    const numbers = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  // Effect to generate headers on component mount
  useEffect(() => {
    setRowHeaders(generateUniqueRandomNumbers(10));
    setColHeaders(generateUniqueRandomNumbers(10));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to handle square click
  const handleSquareClick = (index) => {
    // Create a copy of the colors array
    const newColors = [...colors];
    // Toggle the color of the clicked square
    newColors[index] = newColors[index] === "white" ? "blue" : "white";
    // Update state with the new colors array
    setColors(newColors);
  };

  // Function to highlight a specific square based on coordinates
  const highlightSquare = (row, col) => {
    const awayTeamLastDigit = game.away_team_score % 10;
    const homeTeamLastDigit = game.home_team_score % 10;
    console.log(
      "highlight square func called" +
        awayTeamLastDigit +
        ", " +
        homeTeamLastDigit
    );
    const rowIndex = rowHeaders.indexOf(awayTeamLastDigit);
    const colIndex = colHeaders.indexOf(homeTeamLastDigit);
    const index = rowIndex * 10 + colIndex;
    setHighlightedCoords({ awayTeamLastDigit, homeTeamLastDigit });
    // Optionally, you can also update the colors array to highlight the square
    // Uncomment the line below if you want to highlight the square with a specific color
    // setColors(colors.map((color, i) => (i === index ? 'yellow' : color)));
  };

  // Generate the table
  const renderTable = () => {
    const table = [];
    const colHeaderRow = colHeaders.map((colHeader, index) => (
      <th key={index + 1} className={classes.tableColumnHeader}>
        {colHeader}
      </th>
    ));
    table.push(
      <tr key="colHeaders">
        <th></th>
        {colHeaderRow}
      </tr>
    );

    for (let i = 0; i < 10; i++) {
      const rowHeader = rowHeaders[i];
      const row = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        row.push(
          <td
            key={index}
            onClick={() => handleSquareClick(index)}
            class={classes.td}
            onMouseEnter={() => highlightSquare(rowHeader, colHeaders[j])}
            onMouseLeave={() => setHighlightedCoords({ row: null, col: null })}
            style={{
              backgroundColor: colors[index],
              outline:
                highlightedCoords.row === rowHeader &&
                highlightedCoords.col === colHeaders[j]
                  ? "2px solid red"
                  : "none",
            }}
          ></td>
        );
      }
      table.push(
        <tr key={i}>
          <th className={classes.tableRowHeader}>{rowHeader}</th>
          {row}
        </tr>
      );
    }
    return table;
  };

  return (
    <PageContainer>
      <h1>
        {game.home_team} vs. {game.away_team}
      </h1>
      <h3>Away Score: {game.away_team_score}</h3>
      <h3>Home Score: {game.home_team_score}</h3>
      {/* <h3>Away Last Digit: {awayTeamLastDigit}</h3>
      <h3>Home Last Digit: {homeTeamLastDigit}</h3> */}
      <div className={classes.tableContainer}>
        <table>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export default Squares;
