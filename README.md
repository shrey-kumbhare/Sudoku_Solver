

# Sudoku Solver

A web-based Sudoku game with a solver, input validation, and hints feature. This project allows users to play Sudoku, enter their numbers, and automatically solve the puzzle with a backtracking algorithm. It includes validation logic to ensure the numbers entered comply with Sudoku rules.

## Features:
- **Input Validation**: Ensures that each input follows Sudoku rules (numbers between 1 and 9).
- **Solver**: Uses a backtracking algorithm to solve the puzzle if it's valid.
- **Hints**: Displays hints for empty cells with the correct values.
- **Cell Styling**: Cells with predefined values or solved cells are visually distinct.
- **Responsive UI**: The grid layout adjusts to the screen size, making it user-friendly on both desktop and mobile devices.

---

## Validation Logic

The Sudoku board follows these key validation rules:
1. **Row Check**: Each number (1–9) must appear only once in each row.
2. **Column Check**: Each number (1–9) must appear only once in each column.
3. **3x3 Subgrid Check**: Each number (1–9) must appear only once in each of the nine 3x3 subgrids.

Whenever the user enters a value, these rules are checked to ensure the validity of the input. If a value is invalid (i.e., violates any of the rules), it is not accepted.

---

## Solving Algorithm

The solver uses the **Backtracking algorithm** to find the solution to the puzzle. Here’s how it works:

1. **Backtracking Approach**:
   - Start with the first empty cell in the grid.
   - Try placing numbers 1–9 in that cell.
   - After placing a number, validate the board by checking the row, column, and subgrid constraints.
   - If the placement is valid, move to the next empty cell and repeat the process.
   - If no valid number can be placed, backtrack: undo the previous step and try the next possibility.
   - Continue this process until the board is solved or no solution exists.

2. **Steps**:
   - Iterate through each empty cell.
   - For each empty cell, try placing a number from 1 to 9.
   - If placing the number doesn't violate any rules (row, column, or subgrid), move to the next empty cell.
   - If the grid is completely filled and valid, the puzzle is solved.

---

## Running the Project

### Prerequisites:
- **Node.js**: Ensure you have Node.js and npm installed. If not, download and install from [nodejs.org](https://nodejs.org/).

### Steps to Run:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shrey-kumbhare/Sudoku_Solver.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd sudoku-solver
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   - Open your browser and navigate to `http://localhost:3000` to view the Sudoku game.

---

## Additional Notes

- **Customization**: You can adjust the size of the grid or change the backtracking algorithm if desired.
- **Mobile Optimization**: The Sudoku grid is responsive, meaning it will adjust to fit different screen sizes.
- **Future Enhancements**: 
   - **Difficulty Levels**: Add multiple difficulty levels by generating puzzles with varying levels of complexity.
   - **Timer**: Implement a timer to challenge users to solve the puzzle within a certain time limit.
   - **Puzzle Generator**: Include a feature to randomly generate Sudoku puzzles with unique solutions.

---

## Project Structure

- **`/pages`**: Contains the main UI components and the grid rendering logic.
- **`/styles`**: Styles for the Sudoku grid and layout.
- **`/utils`**: Helper functions for validation, solving, and generating the Sudoku puzzle.

---

 
