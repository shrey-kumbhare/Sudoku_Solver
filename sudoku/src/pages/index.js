import { useState } from "react";
import SudokuGrid from "../components/SudokuGrid";
import { isValidSudoku } from "../utils/validate";
import { solveSudoku } from "../utils/solve";

export default function Home() {
  // Initialize state for the grid, error message, and solved grid
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill("")));
  const [error, setError] = useState(null);
  const [solvedGrid, setSolvedGrid] = useState(null);

  // Function to handle input changes and reset the solved grid
  const handleInputChange = (newGrid) => {
    setGrid(newGrid);
    setSolvedGrid(null);
  };

  // Function to validate the Sudoku grid
  const handleValidate = () => {
    if (!isValidSudoku(grid)) {
      setError("The Sudoku puzzle is invalid. Please check the inputs.");
    } else {
      setError(null);
    }
  };

  // Function to solve the Sudoku grid
  const handleSolve = () => {
    if (isValidSudoku(grid)) {
      setSolvedGrid(solveSudoku(grid));
    } else {
      setError("The Sudoku puzzle is invalid. Please check the inputs.");
    }
  };

  // Function to fill the grid with a sample Sudoku puzzle
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
    setSolvedGrid(null); // Reset the solved grid whenever a sample is loaded
  };

  return (
    <div className="container">
      <h1>Sudoku Solver</h1>
      <SudokuGrid onInputChange={handleInputChange} grid={grid} />
      <button onClick={handleValidate}>Validate</button>
      <button onClick={handleSolve}>Solve</button>
      <button onClick={handleSampleSudoku}>Load Sample Sudoku</button>
      {error && <div className="error">{error}</div>}
      {solvedGrid && (
        <div className="solution">
          <h2>Solved Sudoku</h2>
          <SudokuGrid onInputChange={() => {}} grid={solvedGrid} />
        </div>
      )}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(9, 40px);
          gap: 5px;
        }
        .row {
          display: flex;
        }
        input {
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 16px;
        }
        button {
          margin: 10px;
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }
        .error {
          color: red;
        }
        .solution {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
