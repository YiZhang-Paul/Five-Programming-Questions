/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * <1 hour problem No.4
		 * Write a function that given a list of non negative integers, arranges them such that 
		 * they form the largest possible number. For example, given [50, 2, 1, 9], 
		 * the largest formed number is 95021.
		 */
		console.log("Question 4:"); 

		const numbers = [50, 2, 1, 9];

		//brute-force permutation method
		function permuteNum1(digits, curNum = "") {
			if(!digits.length) {
				return [curNum];
			}
			let permute = [];
			for(let i = 0; i < digits.length; i++) {
				permute.push(...permuteNum1([...digits.slice(0, i), ...digits.slice(i + 1)], curNum + digits[i]));
			}
			return permute;
		}

		function maxNumber1(digits) {
			return Math.max(...permuteNum1(digits).map(Number));
		}
		console.log(`%c[50, 2, 1, 9] -> %c${maxNumber1(numbers)}`, "color : skyblue;", "color : orange;");

		//another brute-force permutation method
		function permuteNum2(digits) {
			if(digits.length == 1) {
				return digits;
			}
			let permute = [];
			for(let i = 0; i < digits.length; i++) {
				for(let numSlice of permuteNum2([...digits.slice(0, i), ...digits.slice(i + 1)])) {
					permute.push(digits[i] * Math.pow(10, String(numSlice).length) + numSlice);
				}
			}
			return permute;
		}

		function maxNumber2(digits) {
			return Math.max(...permuteNum2(digits).map(Number));
		}
		console.log(`%c[50, 2, 1, 9] -> %c${maxNumber2(numbers)}`, "color : skyblue;", "color : orange;");

		//find maximum number by padding digits
		function padNumber(number, maxLen) {
			const numStr = String(number);
			return numStr.length < maxLen ? Number(number + numStr[0].repeat(maxLen - numStr.length)) : number;
		}
		
		function maxNumber3(digits) {
			const maxLen = String(Math.max(...digits)).length;
			return Number(digits.slice().sort((a, b) => padNumber(b, maxLen) - padNumber(a, maxLen)).join(""));
		}
		console.log(`%c[50, 2, 1, 9] -> %c${maxNumber3(numbers)}`, "color : skyblue;", "color : orange;");
		
		//find maximum using Steinhaus Johnson Trotter Algorithm
		//check if a number is mobile number
		function isMobile(index, numbers, directions) {
			let curNum = numbers[index];
			let nextNum = numbers[index + directions[index]];
			return nextNum && curNum > nextNum;
		}
		//get index of maximum mobile number
		function maxMobileIndex(numbers, ascNumbers, directions) {
			for(let i = ascNumbers.length - 1; i >= 0; i--) {
				let index = numbers.indexOf(ascNumbers[i]);
				if(isMobile(index, numbers, directions)) {
					return index;
				}
			}
			return -1;
		}
		//swap elements between two indexes
		function swapIndex(array, index1, index2) {
			[array[index1], array[index2]] = [array[index2], array[index1]];
		}
		//move a mobile number
		function moveNumber(index, numbers, directions) {
			const nextIndex = index + directions[index];
			swapIndex(numbers, index, nextIndex);
			swapIndex(directions, index, nextIndex);
		}
		//flip directions of all integers larger than current maximum mobile number
		function flipNumbers(maxNumber, numbers, directions) {
			numbers.forEach((number, index) => {
				if(number > maxNumber) {
					directions[index] *= -1;
				}
			});
		}
		//find permutations 
		function permuteNum3(numbers, ascNumbers, directions, permute = []) {
			const mobileIndex = maxMobileIndex(numbers, ascNumbers, directions);
			if(mobileIndex == -1) {
				return [ascNumbers.join(""), ...permute];
			}
			const curNum = numbers[mobileIndex];
			moveNumber(mobileIndex, numbers, directions);
			flipNumbers(curNum, numbers, directions);
			return permuteNum3(numbers, ascNumbers, directions, [...permute, numbers.join("")]);
		}

		function maxNumber4(digits) {
			let ascNumbers = digits.slice().sort((a, b) => a - b);
			let directions = new Array(digits.length).fill(-1);
			return Math.max(...permuteNum3(ascNumbers.slice(), ascNumbers, directions).map(Number));
		}
		console.log(`%c[50, 2, 1, 9] -> %c${maxNumber4(numbers)}`, "color : skyblue;", "color : orange;");
	});
})();