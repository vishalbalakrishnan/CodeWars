function partsSums(ls) {
    let x = ls.reduce((acc, val) => acc + val, 0)
    return [x].concat(ls.map(e => x -= e ))
}

