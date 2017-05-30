/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * <1 hour problem No.2
		 * Write a function that combines two lists by alternatingly taking elements. 
		 * For example: given the two lists [a, b, c] and [1, 2, 3], 
		 * the function should return [a, 1, b, 2, c, 3].
		 */
		console.log("Question 2:");
		 
		//concatenate two lists alternatingly 
		function concatList(list1, list2) {
			let result = [];
			for(let i = 0; i < list1.length; i++) result.push(list1[i], list2[i]);
			return result;	
		}
		console.log(`concatList(["a", "b", "c"], [1, 2, 3]) -> ${concatList(["a", "b", "c"], [1, 2, 3])}`);	
	});
})();