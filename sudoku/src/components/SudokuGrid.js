import { useState } from "react";
import styles from "../styles/SudokuGrid.module.css";

const SudokuGrid = ({ onInputChange, grid }) => {
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
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="number"
            min="1"
            max="9"
            value={cell || ""}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            className={cell !== "" ? styles.filled : ""}
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
