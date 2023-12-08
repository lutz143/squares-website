// ColorGrid.js
import PageContainer from "../containers/PageContainer";
import React, { useState, useEffect } from 'react';
import classes from "./Squares.module.css";
import { Nav, Button, Card, Container, Row, Col } from 'react-bootstrap';

const Squares = () => {
  // Initialize state for colors
  const [colors, setColors] = useState(Array(100).fill('white'));
  // Initialize state for row and column headers
  const [rowHeaders, setRowHeaders] = useState([]);
  const [colHeaders, setColHeaders] = useState([]);

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
    newColors[index] = newColors[index] === 'white' ? 'blue' : 'white';
    // Update state with the new colors array
    setColors(newColors);
  };

  // Generate the table
  const renderTable = () => {
    const table = [];
    const colHeaderRow = colHeaders.map((colHeader, index) => (
      <th key={index + 1} className={classes.tableColumnHeader}>{colHeader}</th>
    ));
    table.push(<tr key="colHeaders"><th></th>{colHeaderRow}</tr>);

    for (let i = 0; i < 10; i++) {
      const rowHeader = rowHeaders[i];
      const row = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        row.push(
          <td
            key={index}
            onClick={() => handleSquareClick(index)}
            style={{ backgroundColor: colors[index] }}
            class={classes.td}
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
      <div className={classes.tableContainer}>
        <table>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export default Squares;