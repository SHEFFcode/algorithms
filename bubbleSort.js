/*====================================================================================================================
								Bubble Sort (Swap adjacent values and track swap bool) (Stable)
====================================================================================================================*/

function bubbleSort (arr) { //bubble search function that will accept an unsorted arr
	var temp; // will be used later to implement the swap logic
	var endIndex = arr.length; // this will track how far we have to check, since the largest values will start bubbling
	var swap; // will help us see if we have ever entered into the if logic for the swap
	while (endIndex--) { // this while loop will terminate once we reach 0, since 0 is a falsy boolean
		swap = false; // set the value of swap to false at the start of each for loop
		for (var i = 0; i < endIndex; i++) { // iterate through the loop from zero to end index
			if (arr[i] > arr[i + 1]) { //if the value at i is bigger than the value at index to its right
				temp = arr[i]; //set temp value equal to the value at index i, this will help us do the swap
				arr[i] = arr[i + 1]; // make the input at current spot in the loop equal to the value to the right
				arr[i + 1] = temp; // make the value of the element to the right equal to the value of the temp variable
				swap = true; // if we have enetered the if logic, it means that swap has occured
			}
		}
		if (!swap) { // if swap is false and now swaps have occurred, the array is already sorted
			break; //terminates any further while loops
		}
	}
	return arr; //return the now sorted input array
}

console.log(bubbleSort([3, 2, 8, 28, 12, 15]));