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

		//permutation of all numbers without re-using numbers
		function permuteNumbers1(numbers, counter, curPattern) {
			if(curPattern.length == counter) {
				return curPattern;
			}
			let permutations = [];
			for(let i = 0; i < numbers.length; i++) {
				//number used and remaining numbers
				let curNumber = numbers[i];
				let otherNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
				//attach current number used to current pattern
				let result = permuteNumbers1(otherNumbers, counter, curPattern + curNumber);
				if(Array.isArray(result)) {
					permutations.push(...result);
				} else {
					permutations.push(result);
				}
			}	
			return permutations;
		}

		//another permutation function in backward direction 
		function permuteNumbers2(numbers) {
			if(numbers.length == 1) {
				return numbers;
			}
			let permutations = [];
			for(let i = 0; i < numbers.length; i++) {
				//number used and remaining numbers
				let curNumber = numbers[i];
				let otherNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
				//combine permutations backwards when bottom of function stack returns
				for(let numSegment of permuteNumbers2(otherNumbers)) {
					permutations.push(curNumber + numSegment);
				} 
			}
			return permutations;
		}

		/**
		 * Steinhaus Johnson Trotter Algorithm
		 * has the ability to stop generating permutations 
		 * at any point and resume generating the rest of 
		 * permutations at later point
		 */
		function steinhausPermute(array) {
			//determine if a number on given index is a mobile number
			function isMobile(index) {
				let curNum = curArr[index];
				let nextNum = curArr[index + dirArr[index]];
				return nextNum && +curNum > +nextNum;
			}
			//find maximum mobile number
			function maxMobileIndex() {
				for(let i = sortedArr.length - 1; i >= 0; i--) {
					let index = curArr.indexOf(sortedArr[i]);
					if(isMobile(index)) {
						return index;
					}
				}
				return -1;
			}
			//swap elements between two indexes 
			function swapIndex(array, index1, index2) {
				let temp = array[index1];
				array[index1] = array[index2];
				array[index2] = temp;
			}
			//move a mobile number towards its direction
			function moveNum(index) {
				let nextIndex = index + dirArr[index];
				swapIndex(curArr, index, nextIndex);
				swapIndex(dirArr, index, nextIndex);
			}
			/** 
			 * find all integers that are larger than 
			 * current maximum mobile number and change 
			 * all their directions
			 */
			function flipNum(curNum) {
				curArr.forEach((number, index) => {
					if(+number > curNum) dirArr[index] *= -1;
				});
			}
			//find permutations
			function permute() {
				"use strict";
				//record total time of permutation thus far
				curPermute++;
				let curMobile = maxMobileIndex();
				/**
				 * stop permutation when limit reached (to avoid stack size error)
				 * or no mobile number exists
				 */
				if(curPermute == permuteLimit || curMobile === -1) {
					return;
				}
				let curNum = curArr[curMobile];
				//move current mobile number and record new permutation
				moveNum(curMobile);
				permutations.push(curArr.join(""));
				//change direction of all larger integers after every move
				flipNum(curNum);
				return permute();
			}
			//sorted array from lowest to highest
			let sortedArr = array.sort((a, b) => +a - +b);
			//current array default from sorted array
			let curArr = sortedArr.slice();
			//array recording directions for all numbers
			let dirArr = new Array(array.length).fill(-1);
			//current permutations (default array is one of the permutations too!)
			let permutations = [curArr.join("")];
			//find total number of possible permutations (including duplicate entries)
			let factorial = n => n > 1 ? n * factorial(n - 1) : 1;
			const allPermute = factorial(array.length);
			//break down function calls and produce permutations in segments
			let curPermute = 0, permuteLimit = 0;
			for(let i = 0; i < Math.ceil(allPermute / 5000); i++) {
				permuteLimit = (i + 1) * 5000;
				permute();
			}
			//return final result
			return permutations;
		}

		/**
		 * sort given number array to form largest possible number left to right
		 */
		function sortNumbers(a, b) {
			let aLessThanB = a.length < b.length;
			/**
			 * pad shorter number to equal lengths using left most digit 
			 * e.g when comparing 50 and 5529, pad 50 with 5 to 5055
			 */
			let tempNumber = aLessThanB ? a.slice() : b.slice();
			while(tempNumber.length < (aLessThanB ? b.length : a.length)) {
				tempNumber += tempNumber[0];	
			}
			//put longer number in front if its value equals to padded shorter number
			if(tempNumber == b || tempNumber == a) {
				return +b - +a;
				//put number with higher value (by comparing longer number with padded shorter number)
			} else {
				return aLessThanB ? +b - +tempNumber : +tempNumber - +a;
			}
		}
		const numberStrings = [50, 2, 1, 9].map(a => a.toString());
		//find largest number using permutation method
		let largestNumber1 = permuteNumbers1(numberStrings, numberStrings.join("").length, "").sort((a, b) => +b - +a)[0];
		console.log(`The largest number is: ${largestNumber1}`);
		let largestNumber2 = permuteNumbers2(numberStrings).sort((a, b) => +b - +a)[0];
		console.log(`The largest number is: ${largestNumber2}`);
		//using steinhaus permutation algorithm
		let largestNumber3 = steinhausPermute(numberStrings.slice()).sort((a, b) => +b - +a)[0];
		console.log(`The largest number is: ${largestNumber3}`);
		//find largest number using sorting method
		let largestNumber4 = numberStrings.slice().sort(sortNumbers).join("");
		console.log(`The largest number is: ${largestNumber4}`);	
	});
})();