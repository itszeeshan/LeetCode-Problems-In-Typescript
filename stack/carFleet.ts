function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position
        .map((pos, i) => ({ pos, time: (target - pos) / speed[i] }))
        .sort((a, b) => b.pos - a.pos);

    let fleets = 0;
    let curTime = 0;

    for (const car of cars) {
        if (car.time > curTime) {
            fleets++;
            curTime = car.time;
        }
    }

    return fleets;
}

const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed)); // Output: 3
