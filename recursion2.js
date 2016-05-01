/*====================================================================================================================
													Recursion w/Sideeffects
====================================================================================================================*/
function nthFibonacci (n, i, fibonacci) { // instead of having scope variables, we have them as inputs, buttom up
	fibonacci = fibonacci || [0, 1]; // set the default fib attay if fibonacci param is undefined
	i = i || 2; // set the default i value if i param is not defined
	if (n < 2) { // edge case where n is less then 2, we will just return a 0 or a 1
		return fibonacci[n]; // base case
	}
	fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // a way to find the value of fibonacci array
	if (i === n) { // if we are now on the nth level in our recursion, return fib at that level
		return fibonacci[i]; // base case
	}
	return nthFibonacci(n, i + 1, fibonacci); // we call the recursion with side effects again through a return stmt
}

/*====================================================================================================================
													Pure Recursion
====================================================================================================================*/
function pureFib (n) {
	if (n < 2) { // base case, if less then 2, just return n
		return n; // n will be 0 or 1 anyway so there it is
	}
	return pureFib(n - 1) + pureFib(n - 2); // sum up the two previous fib values, and returning it up the stack.
											// not tail recursion because there are 2 recursive calls at the end
}

function smallPureFib (n) { // this is going to be sick
	return n < 2 ? n : smallPureFib(n - 1) + smallPureFib(n - 2); // this is a refactored way of doing the above;
}