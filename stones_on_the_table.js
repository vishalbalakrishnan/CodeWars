function solve(stones) {
    var val = 0
    for (let i = 0; i < stones.length - 1; i++) {
        val = stones[i] == stones[i + 1] ? val + 1 : val
    }
    return val;
}