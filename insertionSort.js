/*====================================================================================================================
						Insertion Sort (Sorted region and unsorted region) (Stable sort)
====================================================================================================================*/
function insertionSort (arr) { // sorting function that accepts the unsorted array
	for (var i = 0; i < arr.length; i++) { // set up the for loop to iterate through the array
		var temp = arr[i]; // we need a temp element to contain current input of i to extract it and move it around
		var pointer = i; // pointer to track where we are when were are checking left side elements with swap logic
		while (pointer > 0 && temp < arr[pointer - 1]) { // we will only do our swap logic from current position to 0th position
			arr[pointer] = arr[pointer - 1]; // if element on the left is bigger, move it to the right
			pointer--; // make sure to decrement the pointer so that we don't have an infinite loop
		}
		arr[pointer] = temp; //however far the pointer has reached, that is where we will place the temp element
	}
	return arr; // return the now sorted input array
}

console.log(insertionSort([3, 9, 1, 4, 7]));