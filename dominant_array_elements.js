function solve(arr) {
    let x = []
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] < arr[k]) {
                flag = false;
            }
        }
        if (flag) {
            x.push(arr[i])
        }
    }
    return [...new Set(x)]
}

// function solve(arr){
//     return arr.filter((e,i)=> arr.slice(i+1).every(x => x < e));
//   };