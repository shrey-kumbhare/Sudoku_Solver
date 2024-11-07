export const isValidSudoku = (grid) => {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== "" && row.has(grid[i][j])) return false;
      row.add(grid[i][j]);

      if (grid[j][i] !== "" && col.has(grid[j][i])) return false;
      col.add(grid[j][i]);

      const boxRow = 3 * Math.floor(i / 3);
      const boxCol = 3 * Math.floor(j / 3);
      if (
        grid[boxRow + Math.floor(j / 3)][boxCol + (j % 3)] !== "" &&
        box.has(grid[boxRow + Math.floor(j / 3)][boxCol + (j % 3)])
      )
        return false;
      box.add(grid[boxRow + Math.floor(j / 3)][boxCol + (j % 3)]);
    }
  }
  return true;
};
