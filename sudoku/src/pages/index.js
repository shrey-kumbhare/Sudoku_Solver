import { useState } from "react";
import SudokuGrid from "../components/SudokuGrid";
import { isValidSudoku } from "../utils/validate";
import { solveSudoku } from "../utils/solve";

export default function Home() {
  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(""))
  );
  const [error, setError] = useState(null);
  const [solvedGrid, setSolvedGrid] = useState(null);

  const handleInputChange = (newGrid) => {
    setGrid(newGrid);
    setSolvedGrid(null);
  };

  const handleValidate = () => {
    if (!isValidSudoku(grid)) {
      setError("The Sudoku puzzle is invalid. Please check the inputs.");
    } else {
      setError(null);
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
  };

  return (
    <div className="container">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} onInputChange={handleInputChange} />
      <button onClick={handleValidate}>Validate</button>
      <button onClick={handleSolve}>Solve</button>
      <button onClick={handleSampleSudoku}>Load Sample Sudoku</button>
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
        button {
          margin: 10px;
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 14px;
          border-radius: 5px;
        }
        button:hover {
          background-color: #45a049;
        }
        .error {
          color: #ff4d4d;
          margin-top: 10px;
        }
        .solution {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
