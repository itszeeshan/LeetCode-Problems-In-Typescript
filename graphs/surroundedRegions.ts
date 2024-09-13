function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (i: number, j: number): void => {
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = '#';
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][cols - 1] === 'O') dfs(i, cols - 1);
    }
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[rows - 1][j] === 'O') dfs(rows - 1, j);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
}

const board = [
  ['X','X','X','X'],
  ['X','O','O','X'],
  ['X','X','O','X'],
  ['X','O','X','X']
];
solve(board);
console.log(board); // Output: [['X','X','X','X'], ['X','X','X','X'], ['X','X','X','X'], ['X','O','X','X']]
