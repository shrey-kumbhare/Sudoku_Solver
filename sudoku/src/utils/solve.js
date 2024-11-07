export const solveSudoku = (grid) => {
  const findEmpty = (grid) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === "") return [i, j];
      }
    }
    return null;
  };

  const isValid = (grid, row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
    }
    const boxRow = 3 * Math.floor(row / 3);
    const boxCol = 3 * Math.floor(col / 3);
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (grid[i][j] === num) return false;
      }
    }
    return true;
  };

  const solve = () => {
    const emptyPos = findEmpty(grid);
    if (!emptyPos) return true; // Puzzle is solved
    const [row, col] = emptyPos;
    for (let num = 1; num <= 9; num++) {
      if (isValid(grid, row, col, num.toString())) {
        grid[row][col] = num.toString();
        if (solve()) return true;
        grid[row][col] = "";
      }
    }
    return false;
  };

  solve();
  return grid;
};
