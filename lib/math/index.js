
let calc = {
  add: (x, y) => {
    return x + y;
  },
  substract: (x, y) => {
    return x - y;
  },
  multiply: (x, y) => {
    return x * y;
  },
  divide: (x, y) => {
    return x / y;
  },
  modulo: (x, y) => {
    return x % y;
  }
};


function addition(x, y) {
  return x + y;
}

function substraction(x, y) {
  return x - y;
}
var h = addition(10, 2);
var i = substraction(7, 4);

function combine(x, y) {
  return `${x} ${y}`;
}

module.exports = calc