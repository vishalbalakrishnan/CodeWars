function pigIt(str) {
    return str.split(" ")
        .map(e => e.match(/\?|\!/gi) ? e : e.concat("", e.charAt(0) + "ay").substring(1))
        .join(" ")
}

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }