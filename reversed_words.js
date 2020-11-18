function reverseWords(str) {
    str = str.split(" ").reverse()
    let rev = "";
    str.forEach((element, index) => {
        rev = index == 0 ? element : rev + " " + element
    });
    return rev; // reverse those words
}