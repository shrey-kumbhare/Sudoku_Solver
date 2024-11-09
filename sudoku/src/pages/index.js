import { useState } from "react";
import SudokuGrid from "../components/SudokuGrid";
import { isValidSudoku } from "../utils/validate";
import { solveSudoku } from "../utils/solve";
import { getPossibleValues } from "../utils/hints"; // Import the hints function

export default function Home() {
  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(""))
  );
  const [error, setError] = useState(null);
  const [solvedGrid, setSolvedGrid] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [showHints, setshowHints] = useState(false);
  const [hints, setHints] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(""))
  );

  const handleInputChange = (newGrid) => {
    setGrid(newGrid);
    setSolvedGrid(null);
    setValidationMessage("");
    setHints(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(""))
    );
  };

  const handleValidate = () => {
    if (!isValidSudoku(grid)) {
      setError("The Sudoku puzzle is invalid. Please check the inputs.");
      setValidationMessage("");
    } else {
      setError(null);
      setValidationMessage("You can solve it!");
    }
  };

  const handleSolve = () => {
    if (isValidSudoku(grid)) {
      setSolvedGrid(solveSudoku(grid));
      setError(null);
    } else {
      setError("The Sudoku puzzle is invalid. Please check the inputs.");
    }
  };

  const handleSampleSudoku = () => {
    const samplePuzzle = [
      ["5", "3", "", "", "7", "", "", "", ""],
      ["6", "", "", "1", "9", "5", "", "", ""],
      ["", "9", "8", "", "", "", "", "6", ""],
      ["8", "", "", "", "6", "", "", "", "3"],
      ["4", "", "", "8", "", "3", "", "", "1"],
      ["7", "", "", "", "2", "", "", "", "6"],
      ["", "6", "", "", "", "", "2", "8", ""],
      ["", "", "", "4", "1", "9", "", "", "5"],
      ["", "", "", "", "8", "", "", "7", "9"],
    ];
    setGrid(samplePuzzle);
    setSolvedGrid(null);
    setError(null);
    setValidationMessage("");
    setHints(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(""))
    );
  };

  const handleShowHints = () => {
    setshowHints(!showHints);
    if (showHints && isValidSudoku(grid)) {
      const newHints = getPossibleValues(grid);
      setHints(newHints);
    } else {
      setHints(
        Array(9)
          .fill(null)
          .map(() => Array(9).fill(""))
      );
    }
  };

  return (
    <div className="container">
      <h1>Sudoku Solver</h1>
      {validationMessage && <div className="success">{validationMessage}</div>}
      <SudokuGrid grid={grid} onInputChange={handleInputChange} hints={hints} />

      <div className="button-container">
        <button onClick={handleValidate}>Validate</button>
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleSampleSudoku}>Load Sample Sudoku</button>
        <button onClick={handleShowHints}>Show Hints</button>{" "}
      </div>

      {error && <div className="error">{error}</div>}

      <style jsx>{`
        .container {
          text-align: center;
          background-color: #00bfff;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .button-container {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        button {
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 14px;
          border-radius: 5px;
          width: 150px;
        }
        button:hover {
          background-color: #45a049;
        }
        .error {
          color: #ff4d4d;
          margin-top: 10px;
        }
        .success {
          color: #005a04;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
