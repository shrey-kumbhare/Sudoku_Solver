// utils/hints.js
export const getPossibleValues = (grid) => {
  const possibleValues = Array(9)
    .fill(null)
    .map(() => Array(9).fill(""));

  const isValid = (num, row, col) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  };

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === "") {
        const options = [];
        for (let num = 1; num <= 9; num++) {
          if (isValid(String(num), row, col)) {
            options.push(num);
          }
        }
        possibleValues[row][col] = options.join(", ");
      }
    }
  }
  return possibleValues;
};
