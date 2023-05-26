
function newFunctioninNewFile(a, b) {
    return `${a + b} This is from first function`;
}

function newFunctionNewFile2(a, b) {
    return `${a * b} This is from second function`
}

const newVariable3 = 'This is from variable 3'

const newVariable4 = 'Kita belajar Pemrograman Web. Semangat!!!!'
// console.log(newFunctioninNewFile(1, 2))
// console.log(newFunctionNewFile2(2, 3))


module.exports = {
    newFunctioninNewFile,
    newFunctionNewFile2,
    newVariable3,
    newVariable4,
}

// module.exports.newFunctioninNewFile = newFunctioninNewFile;
// module.exports.newFunctionNewFile2 = newFunctionNewFile2;
// module.exports.newVariable3 = newVariable3;