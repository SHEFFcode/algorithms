/*====================================================================================================================
									Bottom Up (Start at some value, work to input case)
====================================================================================================================*/

function fibonacciBottomUp (n) { //wrapper function, will be called by the user with desired nth fibonacci
	var fibonacciArray = [0, 1]; //scope variable containing the fibonacci array, with 2 initial items

	function searchFib (i) { //helper function, called by user, fills out the fib array
		if (i > n) { //base case, if n is 0 or 1 return out of the helper function and return the fibonacciArray[i]
			return; // & if i becomes bigger then n return out of the recursion as well
		}
		fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]; // math to find a fib number @ i
		searchFib(i + 1); //call the recursive funciton with increased i
	}

	searchFib(2); //call the helper funciton with a predefined starting case
	return fibonacciArray[n]; // return the fibonacci value @ n
}

console.log('The nth fibonacci number is ' + fibonacciBottomUp(20));