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
		
		//find all permutations of operators with duplications
		function permuteOperator(operators, counter, curPattern) {
			if(curPattern.length == counter) {
				return curPattern;
			}
			let permutations = [];
			for(let i = 0; i < operators.length; i++) {
				let result = permuteOperator(operators, counter, curPattern + operators[i]);
				//return all possible patterns in a single array
				if(Array.isArray(result)) {
					permutations.push(...result);
				} else {
					permutations.push(result);
				}
			}
			return permutations;
		}
		//all available operators
		const allOperator = ["+", "-", " "];
		//all available numbers
		const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		//get all possible operator patterns 
		let allPattern = permuteOperator(allOperator, numberList.length - 1, "");
		//combine all patterns with number list
		let allCombinedList = allPattern.map(pattern => {
			let tempList = numberList.slice();
			for(let i = 1, j = 0; j < pattern.length; i = i + 2, j++) {
				tempList.splice(i, 0, pattern[j] === " " ? "" : pattern[j]);
			}
			//merge numbers separated by spaces and reformat the list 
			return tempList.join("").split(/(?=[+-])/g);
		});
		//evaluate the sum of all numbers in every list and only keep those evaluates to 100
		let finalList = allCombinedList.filter(list => list.reduce((acc, val) => acc + (+val), 0) == 100);
		//display results
		finalList.forEach((a) => {
			console.log(`${a.join("")} = 100`);
		});
	});
})();