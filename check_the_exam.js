function checkExam(array1, array2) {
    let x = 0;
    for (let i = 0; i < array1.length; i++) {
        array1[i] == array2[i] ? x += 4 : !array2[i] ? x = x : x -= 1;
    }
    return x < 0 ? 0 : x
}

// checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;
