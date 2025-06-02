const math = require('./math'); //importing own module

console.log("The sum of 68 and 74 is", math.add(68,74));
console.log("34 minus 25 is", math.sub(34,25));
console.log("The product of 2 and 3 is", math.mult(2,3));
console.log("5 divided by 2 is", math.div(5,2));
console.log("The remainder of 63 / 2 is", math.mod(63,2));
console.log("2^3 is", math.pow(2,3));
console.log("20% of 45 is", math.perc(45,20));