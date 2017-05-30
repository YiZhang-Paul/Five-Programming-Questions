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
		function sum1(...numList) {
			return numList.reduce((acc, val) => acc + val);
		}
		console.log(`sum1(1, 3, 5, 7, 9) -> ${sum1(1, 3, 5, 7, 9)}`);
		
		//for-loop
		function sum2(...numList) {
			let sum = 0;
			for(let i = 0; i < numList.length; i++) sum += numList[i];
			return sum;
		}
		console.log(`sum2(1, 3, 5, 7, 9) -> ${sum2(1, 3, 5, 7, 9)}`);
		
		//while-loop
		function sum3(...numList) {
			let sum = 0, i = 0;
			while(i < numList.length) {
				sum += numList[i];
				i++;
			}
			return sum;
		}
		console.log(`sum3(1, 3, 5, 7, 9) -> ${sum3(1, 3, 5, 7, 9)}`);
		
		//recursion
		function sum4(...numList) {
			return numList.length == 1 ? numList[0] : numList.pop() + sum4(...numList);
		}
		console.log(`sum4(1, 3, 5, 7, 9) -> ${sum4(1, 3, 5, 7, 9)}`);	
	});
})();