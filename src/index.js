module.exports = function solveEquation(equation) {
  // example: solveEquation('2 * x^2 - 10 * x + 12')
  var equationCleanSpace = equation.replace(/\s+/g,"");

	var a = parseFloat(equationCleanSpace); // example: 2

  /*  substr() - method returns the part of a string between 
  the start index and a number of characters after it.
      toString() - method returns a string representing the specified object. */
	var b = parseFloat(equationCleanSpace.substr(a.toString().length+4)); // example: 10
	var c = parseFloat((b > 0) ? equationCleanSpace.substr(a.toString().length+7+b.toString().length) : 
			equationCleanSpace.substr(a.toString().length+6+b.toString().length));

	var d = Math.pow(b,2) - 4*a*c;
	var x1 = Math.round((-b + Math.pow(d,0.5))/(2*a));
	var x2 = Math.round((-b - Math.pow(d,0.5))/(2*a));

	var roots = [];

	roots.push(x1);
	roots.push(x2);
	roots.sort(function(x1,x2) {
		return x1 - x2;
	});

	return roots;
}
