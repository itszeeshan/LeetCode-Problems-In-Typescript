const groupAnagrams = (strs: string[]): string[][] => {
    const anagramMap: { [key: string]: string[] } = {};

    for (const str of strs) {
        const sortedKey = str.split('').sort().join('');
        if (!anagramMap[sortedKey]) {
            anagramMap[sortedKey] = [];
        }
        anagramMap[sortedKey].push(str);
    }

    return Object.values(anagramMap);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); //Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
