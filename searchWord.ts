function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row: number, col: number, index: number): boolean => {
        if (index === word.length) return true;
        if (
            row < 0 || col < 0 || row >= rows || col >= cols || 
            board[row][col] !== word[index]
        ) return false;

        const temp = board[row][col];
        board[row][col] = '#';

        const directions = [
            [1, 0], [-1, 0], [0, 1], [0, -1]
        ];

        for (const [dx, dy] of directions) {
            if (dfs(row + dx, col + dy, index + 1)) {
                return true;
            }
        }

        board[row][col] = temp;
        return false;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const word = "ABCCED";

console.log(exist(board, word)); // Output: true
