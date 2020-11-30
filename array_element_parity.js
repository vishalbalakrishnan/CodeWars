function solve(arr) {
    return arr.filter(e => !arr.includes(e * -1))[0]
};


// const solve=a=>a.find(e=>!a.includes(-e));