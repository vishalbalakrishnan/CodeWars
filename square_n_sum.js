function squareSum(numbers) {
    return numbers.reduce((acc, val) => acc + (val * val), 0)
}