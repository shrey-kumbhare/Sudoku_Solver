export function isValidSudoku(grid) {
  // Check all rows
  for (let row = 0; row < 9; row++) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
      const value = grid[row][col];
      if (value !== "" && seen.has(value)) {
        return false;
      }
      if (value !== "") {
        seen.add(value);
      }
    }
  }

  // Check all columns
  for (let col = 0; col < 9; col++) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
      const value = grid[row][col];
      if (value !== "" && seen.has(value)) {
        return false;
      }
      if (value !== "") {
        seen.add(value);
      }
    }
  }

  // Check all 3x3 subgrids
  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      const seen = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const value = grid[r + i][c + j];
          if (value !== "" && seen.has(value)) {
            return false;
          }
          if (value !== "") {
            seen.add(value);
          }
        }
      }
    }
  }

  return true;
}
