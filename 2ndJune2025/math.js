function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function pow(a, b) {
    return a ** b;
}

function perc(a, b) {
    return (a*b)/100
}

//exporting module
module.exports = {add, sub, mult, div, mod, pow, perc};