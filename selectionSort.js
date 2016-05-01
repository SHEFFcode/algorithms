/*====================================================================================================================
			Selection Sort (Select smallest value and swap it with first unsorted value) (Non stable sort)
====================================================================================================================*/
function selectionSort (arr) { //sorting function that accepts and unsorted array
	for (var i = 0; i < arr.length; i++) { //for loop to loop through the unsorted region
		var min = arr[i]; // set the minimum element to the first element for now
		var minIndex = i;  // set the index where the min element is located to i for now
		for (var j = i + 1; j < arr.length; j++) { // second for loop to check for the minimum value from index onwards
			if (arr[j] < min) { // if the value in the unsorted region is less then current min value
				min = arr[j]; // set the current min to the the smaller value of the unsorted region
				minIndex = j; // update the min index to point to that smaller value
			}
		}
		arr[minIndex] = arr[i]; // swap step 1, we set the value of the current unsorted element equal to value at i
		arr[i] = min; // swap step 2, we set the value at i equal to the minimum value
	}
	return arr; // return the sorted array
}

console.log(selectionSort([8, 3, 2, 10]));