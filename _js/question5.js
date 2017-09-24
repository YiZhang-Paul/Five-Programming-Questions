/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * <1 hour problem No.5
		 * Write a program that outputs all possibilities to put + or - or nothing between 
		 * the numbers 1, 2, ..., 9 (in this order) such that the result is always 100. 
		 * For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.
		 */
		console.log("Question 5:");	

		//find all operator patterns
		function permuteOperator(operators, total, pattern = []) {
			if(pattern.length == total) {
				return [pattern];
			}
			let permute = [];
			for(let i = 0; i < operators.length; i++) {
				permute.push(...permuteOperator(operators, total, [...pattern, operators[i]]));
			}
			return permute;
		}
		//evaluate an equation
		function evalEquation(equation) {
			return equation.match(/[+-]*\d+/g).reduce((acc, val) => acc + Number(val), 0);
		}
		//solve equations
		function solveEquation(operators, numbers, target) {
			let equations = [];
			permuteOperator(operators, numbers.length - 1).forEach(pattern => {
				let equation = numbers.slice(1).reduce((acc, val, index) => 
					[...acc, pattern[index], val], [numbers[0]]).join("");
				if(evalEquation(equation) == target) {
					equations.push(`${equation.match(/[+-]|\d+/g).join(" ")} = ${target}`);
				}
			});
			return equations.join("\n");
		}
		console.log(`%c${solveEquation(["+", "-", ""], [1, 2, 3, 4, 5, 6, 7, 8, 9], 100)}`, "color : orange;");
	});
})();