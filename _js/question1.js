/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * <1 hour problem No.1
		 * Write three functions that compute the sum of the numbers in a given list 
		 * using a for-loop, a while-loop, and recursion.
		 */
		console.log("Question 1:");
		 
		//using higher order function 
		function sum1(...numbers) {
			return numbers.reduce((acc, val) => acc + val);
		}
		console.log(`%c1 + 3 + 5 + 7 + 9 -> %c${sum1(1, 3, 5, 7, 9)}`, "color : skyblue;", "color : orange;");
		
		//for-loop
		function sum2(...numbers) {
			let sum = 0;
			for(let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			return sum;
		}
		console.log(`%c1 + 3 + 5 + 7 + 9 -> %c${sum1(1, 3, 5, 7, 9)}`, "color : skyblue;", "color : orange;");
		
		//while-loop
		function sum3(...numbers) {
			let sum = 0, counter = 0;
			while(counter < numbers.length) {
				sum += numbers[counter++];
			}
			return sum;
		}
		console.log(`%c1 + 3 + 5 + 7 + 9 -> %c${sum1(1, 3, 5, 7, 9)}`, "color : skyblue;", "color : orange;");
		
		//recursion
		function sum4(...numbers) {
			return numbers.length == 1 ? numbers[0] : numbers[0] + sum4(...numbers.slice(1));
		}
		console.log(`%c1 + 3 + 5 + 7 + 9 -> %c${sum1(1, 3, 5, 7, 9)}`, "color : skyblue;", "color : orange;");	
	});
})();