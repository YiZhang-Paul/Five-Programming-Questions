/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * <1 hour problem No.3
		 * Write a function that computes the list of the first 100 Fibonacci numbers. 
		 * By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
		 * and each subsequent number is the sum of the previous two. As an example, 
		 * here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
		 */
		console.log("Question 3:"); 

		//simple for loop
		function getFibonacci(length) {
			let sequence = [0, 1];
			for(let i = 0; i < length - 2; i++) {
				let lastTwo = sequence.slice(-2);
				sequence.push(lastTwo[0] + lastTwo[1]);
			}
			return sequence;
		}
		console.log(`%c${getFibonacci(100).join(" -> ")}`, "color : orange;");
	});
})();