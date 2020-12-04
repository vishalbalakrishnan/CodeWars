const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr
};
// const reverseSeq = n => {
//     return Array(n).fill(0).map((e, i) => n - i);
// }
