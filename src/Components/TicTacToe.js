import React, { useEffect, useState } from "react";
import "../tictactoe.css";

const TicTacToe = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  let winner = "";

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setIsXNext(true);
  };

  const handleSquare = (i) => {
    if (squares[i] === "") {
      setSquares((prevValue) => {
        const updateSquare = [...prevValue];
        updateSquare[i] = isXNext ? "X" : "O";
        return updateSquare;
      });
    }
    setIsXNext(!isXNext);
  };

  const checkWinner = () => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combos) {
      const [a, b, c] = combo;
      // console.log(a);
      console.log(squares[a]);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (squares.every((squares) => squares !== "")) {
      return "draw";
    }
    return null;
  };

  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      setTimeout(() => {
        alert(`Congratulations! Player ${winner} wins!`);
       
        setSquares(Array(9).fill(""));

        setIsXNext(true);
      }, 1000);
    }
  }, [squares]);

  return (
    <div className="main">
      <div className="container">
        <h1>TIC-TAC-TOE</h1>
        <button onClick={resetGame}>NEW GAME</button>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(0)}>
            {squares[0]}
          </div>
          <div className="square" onClick={() => handleSquare(1)}>
            {squares[1]}
          </div>
          <div className="square" onClick={() => handleSquare(2)}>
            {squares[2]}
          </div>
        </div>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(3)}>
            {squares[3]}
          </div>
          <div className="square" onClick={() => handleSquare(4)}>
            {squares[4]}
          </div>
          <div className="square" onClick={() => handleSquare(5)}>
            {squares[5]}
          </div>
        </div>
        <div className="squareBoxes">
          <div className="square" onClick={() => handleSquare(6)}>
            {squares[6]}
          </div>
          <div className="square" onClick={() => handleSquare(7)}>
            {squares[7]}
          </div>
          <div className="square" onClick={() => handleSquare(8)}>
            {squares[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;

