function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    const minHeap: [number, number][] = [];
    const inMST = new Array(n).fill(false);
    let edgesUsed = 0;
    let totalCost = 0;

    minHeap.push([0, 0]);

    while (edgesUsed < n) {
        const [cost, u] = minHeap.shift()!;
        if (inMST[u]) continue;

        inMST[u] = true;
        totalCost += cost;
        edgesUsed += 1;
        for (let v = 0; v < n; v++) {
            if (!inMST[v]) {
                const distance = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                minHeap.push([distance, v]);
            }
        }
        minHeap.sort((a, b) => a[0] - b[0]);
    }

    return totalCost;
}

const points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
console.log(minCostConnectPoints(points)); // Output: 20
