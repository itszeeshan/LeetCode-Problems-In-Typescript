class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // returns 1
lru.put(3, 3); 
console.log(lru.get(2)); // returns -1
lru.put(4, 4); 
console.log(lru.get(1)); // returns -1
console.log(lru.get(3)); // returns 3
console.log(lru.get(4)); // returns 4
