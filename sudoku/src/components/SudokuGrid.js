import styles from "../styles/SudokuGrid.module.css";

const SudokuGrid = ({ onInputChange, grid, hints }) => {
  const handleChange = (row, col, value) => {
    // Allow only digits 1-9
    if (/^[1-9]?$/.test(value)) {
      const newGrid = [...grid];
      newGrid[row] = [...grid[row]];
      newGrid[row][col] = value;
      onInputChange(newGrid);
    }
  };

  return (
    <div className={styles.grid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="text"
              value={cell || ""}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={cell !== "" ? styles.disabled : ""}
              disabled={cell !== ""}
              placeholder={cell === "" ? hints[rowIndex][colIndex] : ""}
              maxLength={1} // Prevents entering more than one character
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
