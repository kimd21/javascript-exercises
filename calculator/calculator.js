function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	if (!arr || !arr.length) {return 0;}
	return arr.reduce((accum, val) => accum + val);
}

function multiply (arr) {
	return arr.reduce((accum, val) => accum * val);
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	if (a < 1) {
		return 1;
	}
	return a * factorial(a - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}