function litres(time) {
    let litre = Math.floor(time)
    litre = litre % 2 == 0 ? litre / 2 : (litre - 1) / 2
    return litre;
}

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }