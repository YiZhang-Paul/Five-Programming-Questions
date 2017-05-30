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

		//recursion with tail call optimization
		function fibonacci1(counter, start1, start2) {
			//function to calculate next number by summing up first two 
			function fib(counter, num1, num2) {
				"use strict";
				if(counter === 0) {
					return;
				}
				//print next number
				console.log(num1 + num2);
			  return fib(counter - 1, num2, num1 + num2);
			}
			//print first two
			console.log(start1);
			console.log(start2);
			//print other numbers
			fib(counter, start1, start2);
		}
		console.log("fibonacci1(100, 0, 1) -> ");
		fibonacci1(100, 0, 1);	

		//while loop 
		function fibonacci2(counter) {
			let x = 0, y = 1, z;
			console.log(x);
			console.log(y);
			while(counter > 0) {
				z = x + y;
				/** 
				 * discard first number and shift last two 
				 * numbers to replace first two
				 */
				x = y;
				y = z;
				console.log(z);
				counter--;
			}
		}
		console.log("fibonacci2(100, 0, 1) -> ");
		fibonacci2(100, 0, 1);	
	});
})();