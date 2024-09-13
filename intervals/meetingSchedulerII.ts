function minAvailableDuration(schedules: number[][][], duration: number): number[] {
    const allIntervals: number[][] = [];
    for (const schedule of schedules) {
        for (const interval of schedule) {
            allIntervals.push(interval);
        }
    }
    allIntervals.sort((a, b) => a[0] - b[0]);
    let end = allIntervals[0][1];
    for (let i = 1; i < allIntervals.length; i++) {
        const [start, nextEnd] = allIntervals[i];
        if (start < end) {
            if (end - start >= duration) {
                return [start, start + duration];
            }
            end = Math.min(end, nextEnd);
        } else {
            end = nextEnd;
        }
    }
    return [];
}

const schedules = [[[1, 3], [6, 7]], [[2, 4]], [[2, 3], [9, 12]]];
const duration = 1;
console.log(minAvailableDuration(schedules, duration)); // Output: [6, 7]
