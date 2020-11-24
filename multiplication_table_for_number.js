function multiTable(number) {
    let str = ""
    for (i = 1; i <= 10; i++) {
        str = str.concat(`${i} * ${number} = ${i * number}\n`)
    }
    return str.trim();
}

// function multiTable(n) {
//     return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
//   }