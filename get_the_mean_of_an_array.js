function getAverage(marks) {
    const sum = (acc, val) => { return acc + val }
    const avg = marks.reduce(sum);
    return Math.floor(avg / marks.length);
}