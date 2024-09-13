function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue: [number, number][] = [];
    let freshOranges = 0;
    let minutes = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
    }

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    while (queue.length > 0 && freshOranges > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()!;

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                 if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    queue.push([newX, newY]);
                    freshOranges--;
                }
            }
        }

        minutes++;
    }
    return freshOranges === 0 ? minutes : -1;
}

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];

console.log(orangesRotting(grid)); // Output: 4