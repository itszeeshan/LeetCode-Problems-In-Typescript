function pow(x: number, n: number): number {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    if (n % 2 === 0) {
        const half = pow(x, n / 2);
        return parseFloat((half * half).toFixed(2));
    } else {
        return parseFloat((x * pow(x, n - 1)).toFixed(2));
    }
}

console.log(pow(2, 10)); // Output: 1024.00
