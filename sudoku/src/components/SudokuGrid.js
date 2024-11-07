import { useState } from "react";
import styles from "../styles/SudokuGrid.module.css";

const SudokuGrid = ({ onInputChange, grid }) => {
  // Handle input change in the grid
  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, rIndex) =>
      rIndex === row
        ? r.map((cell, cIndex) => (cIndex === col ? value : cell))
        : r
    );
    onInputChange(newGrid);
  };

  return (
    <div className={styles.grid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="number"
              min="1"
              max="9"
              value={cell || ""}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={cell !== "" ? styles.disabled : ""}
              disabled={cell !== ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
