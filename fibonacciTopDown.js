/*====================================================================================================================
									Bottom Up (Start at some value, work to input case)
====================================================================================================================*/

function fibonacciTopDown (n) { //wrapper function to be called by the user with n as the desired fib number
	var result; // instanciate the scope variable result that will contain our fib (n) number

	function searchFib (i) { //helper function with i for index to track the state
		if (i < 2) { // base case, if the i is less then 2, we are back to 0 or 1 output for nth fib
			return i;  // return i because nth fib at 0 is 0, and nth fib at 1 is 1, which works out nicely
		} else { // if the i being asked for in the recursive case is 2 or bigger, run this code
			return searchFib(i - 2) + searchFib(i - 1); // recursive case, each lower level fib function, will need to know
														// fib at the lower level aside from the base case.
														// notice the braching effect and multiple recursion
		}

	}

	result = searchFib(n); // result will be the result of recursively calling searchFib function with input n
	return result; // return the result, which will be the nth fibonacci
}

console.log('The nth fibonacci number is ' + fibonacciTopDown(20));