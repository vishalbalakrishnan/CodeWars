function menFromBoys(arr) {
    let even = []
    let odd = []
    for (const e of arr) {
        e % 2 == 0 ? even.push(e) : odd.push(e)
    }
    even.sort((a, b) => { return a - b });
    odd.sort((a, b) => { return b - a });
    return [...new Set(even.concat(odd))]
}

// var menFromBoys = (arr) => [...new Set(arr.filter(e => e % 2 === 0).sort((a,b)=> a-b)),...new Set(arr.filter(e => e % 2).sort((a,b)=>b-a))]

// const menFromBoys = arr => {
//     let [evens, odds] = [[], []];
//     [...new Set(arr)].sort((a, b) => a - b) .forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
//     return [...evens, ...odds];
//   };