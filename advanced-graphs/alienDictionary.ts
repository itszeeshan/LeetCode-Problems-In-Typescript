function alienOrder(words: string[]): string {
    const adjList: { [key: string]: Set<string> } = {};
    const inDegree: { [key: string]: number } = {};

    for (const word of words) {
        for (const char of word) {
            if (!(char in inDegree)) {
                inDegree[char] = 0;
            }
        }
    }


    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        if (word1.length > word2.length && word1.startsWith(word2)) {
            return '';
        }

        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1[j] !== word2[j]) {
                if (!adjList[word1[j]]) {
                    adjList[word1[j]] = new Set();
                }
                if (!adjList[word1[j]].has(word2[j])) {
                    adjList[word1[j]].add(word2[j]);
                    inDegree[word2[j]] += 1;
                }
                break;
            }
        }
    }

    const queue: string[] = [];
    for (const char in inDegree) {
        if (inDegree[char] === 0) {
            queue.push(char);
        }
    }

    const result: string[] = [];
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        if (adjList[current]) {
            for (const neighbor of adjList[current]) {
                inDegree[neighbor] -= 1;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

   return result.length === Object.keys(inDegree).length ? result.join('') : '';
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Output: "wertf"