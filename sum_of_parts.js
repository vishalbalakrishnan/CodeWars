function partsSums(ls) {
    let length = ls.length
    let array = ls
    let last = []
    for (let i = 0; i < length; i++) {
        last.push(array.reduce((acc, val) => acc + val))
        array.splice(0, 1)
    }
    last.push(0)
    return last
}
console.log(partsSums([1, 2, 3, 4, 5, 6]));
