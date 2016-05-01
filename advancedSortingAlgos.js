/*====================================================================================================================
	Merge Sort (Divide recursively until you reach 1 element, then merge back up)(Stable, nlog(n) time complexity)
====================================================================================================================*/
function mergeSort (arr) { // will accept an unsorted array
	var joinArrays = function (arr1, arr2) { // helper function that will join two sorted arrays back up the stack
		var p1 = 0; // pointer 1
		var p2 = 0; // pointer 1
		var result = []; // result merged sorte array that will be returned by this function
		if (arr1 === undefined) { // if array 1 is undefind (empty), return array 2
			return arr2; 
		} else if (arr2 === undefined) { // if array 2 is undefined (empty) return array 1
			return arr1;
		}
		while (arr1[p1] !== undefined && arr2[p2] !== undefined) { // there is an element at pointer 1 and pointer 2
			if (arr1[p1] <= arr2[p2]) { // if array 1 has a smaller or equal value to value of array 2
				result.push(arr1[p1]); // push arr1 value into the merged result array
				p1++; // increase the pointer
			} else {
				result.push(arr2[p2]); // push the arr2 value into the merged result array
				p2++; // increase the p2 pointer
			}
			if (p1 === arr1.length) { // we ran out of elements in array1
				result = result.concat(arr2.slice(p2)); // we are concacting arr2 from p2 onwards
			} else if (p2 === arr2.length) { // we ran out of elelemtns in array2
				result = result.concat(arr1.slice(p1)); // we are concacting arr1 from p1 onwards
			}
		}
		
		return result; // returns the sorted merged array
	} 
	/*--------------------- end of joinArrays function definition ---------------------------*/
	if (arr.length <= 1) { // if the length of the input array is less then or equal to 1
		return arr; // we consider it sorted
	}
	var midIndex = Math.floor(arr.length / 2); // middle index of our input arr
	var left = arr.slice(0, midIndex); // left chunk of the array up to the mid index of the array defined above
	var right = arr.slice(midIndex, arr.length); // right chunk of the array from midindex to the end
	return joinArrays(mergeSort(left), mergeSort(right)); // recursive call here to mergesort will divide up, then merge back
}

/*====================================================================================================================
Quick Sort (Pick a pivot point and divide into maller and larger sections) (Non stable, n^2, but faster then merge)
====================================================================================================================*/
function quickSort (work) { // will accept an unsorted array, quicksort = work
	if (work.length <= 1) { // am array of 1 can be consider sorted
		return work;
	}
	var pivotIndex = Math.floor(work.length / 2); // set a pivot in the middle
	var pivot = work[pivotIndex]; // find the value of the work array at pivot index
	var before = []; // array of smaller elements, smaller then pivot
	var after = []; // array of larger elements, larger then pivot
	for (var i = 0; i < work.length; i++) { // iterate through the work array
		if (i !== pivotIndex) { // we don't want to move around the pivot index
			if (work[i] <= pivot) { //value of work array at i is smaller then value at pivot
				before.push(work[i]); // push that value into the before aray of smaller then pivot values
			} else {
				after.push(work[i]); // push that value into the after array of larger than pivot values
			}
		}
	}
	return quickSort(before).concat(pivot).concat(quickSort(after)); // here we are recursively calling quicksort and gluing elements together
}

/*-------------------------------------- Testing Infrastructure ----------------------------------------------*/
var test = [1, 22, 15, 20, 15, 10, 7, 9, 3, 5, 3, 1, 2];
console.log(mergeSort(test));
console.log(quickSort(test));