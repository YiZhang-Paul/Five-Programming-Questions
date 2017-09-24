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
		 
		//mix two lists 
		function mixList(list1, list2) {
			let mixed = [];
			let [long, short] = list1.length >= list2.length ? [list1, list2] : [list2, list1];
			for(let i = 0; i < short.length; i++) {
				mixed.push(long[i], short[i]);
			}
			return mixed;
		}
		console.log(`%c["a", "b", "c"] + [1, 2, 3] -> %c[${mixList(["a", "b", "c"], [1, 2, 3]).join(", ")}]`, "color : skyblue;", "color : orange;");	
	});
})();