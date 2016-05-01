/*====================================================================================================================
						Binary Search Tree (Lower Value on the Left, Higher Value on the Right)
====================================================================================================================*/
var Node = function (value) { // constructor function for the Node class
	this.value = value; // value property will be equal to the input of the constructor function
	this.leftChild = null; // left child will initially be null
	this.rightChild = null; // right child will initially be null
}

var BinarySearchTree = function () { // constructor function for BunarySearch Tree class we will not handle duplicates here
	var self = this; // set up a self reference to be able to access BST throughout this constructor function
	this.root = null; // set the initial root to be null initially
	this.size = 0; // size starts out at 0
	this.insert = function (value) { //insert function will take in a value and insert it into the tree
		if (self.root === null) { // if the root node is 0, and the tree is empty
			self.root = new Node (value); // create a new node from the value passed into the function
			self.size++; // increase the size of the binary search tree object
		} else { // thre tree is not empty
			var findAndInsert = function (currentNode) { // a recursive function that will find where to put in the new node
				if (value > currentNode.value) { // compare the value of the insert func to the value of the node passed in
					if (currentNode.rightChild === null) { // right child property of the current node is null
						currentNode.rightChild = new Node(value); // create a new node and place it into the right child
					} else { // if there is already a right child
						findAndInsert(currentNode.rightChild); // do a recursive call to see where else to put in new node
					}
				} else if (value < currentNode.value) { // compare the value of insert func to value of node passed in
					if (currentNode.leftChild === null) { // the left child does not exist, we can put new node here
						currentNode.leftChild = new Node(value); // create a new node and place it where it belongs
					} else {
						findAndInsert(currentNode.leftChild); // do a recursive call to see where else to put in new node
					}
				}
			}
			findAndInsert(self.root); // Call the recursive function on the root node
			self.size++; // increse the size proprty of the BST object by 1
		}
	}
	this.search = function (target) { // search function accepts a value search param, returns a bool yes or no
		var check = false; // initialize a check value that we will return
		var traverse = function (currentNode) { // function that will recursively travel down our tree
			if (currentNode === null) { // we came all the way to the bottom of the search tree and did not find a value
				return; // return out of this recursive call
			} else if (currentNode.value === target) { // if we find a node with the target value
				check = true; // set check to true
				return; // return out of any further recrusive calls
			}
			if (target > currentNode.value) { // number we are looking for is on the right side
				traverse(currentNode.rightChild); // call the recursive method on the right child
			} else if (target < currentNode.value) { // target value will exist on the left child side
				traverse(currentNode.leftChild); // call the recursive method on the left child
			}
		}
		traverse(self.root); // call traverse on the root node, that is where our search will begin
		return check; // return the bool of yes no if the value searched is in our search tree
	}
	this.delete = function (deleteValue) { // usually in log(n) time, but this will be in linear time, needs an AVL or red black trees
		var temp = []; // capture all the values of the search tree besides the delete value
		var roundUp = function (currentNode) { // recursive function to find all the values aside from the delete value
			if (currentNode === null) { // if we have reached the bottom of the tree, we just want to return out of the call
				return;
			}
			if (currentNode.value !== deleteValue) { // if current node's value is not the delete value
				temp.push(currentNode.value); // push the current node's value into the array
			}
			roundUp(currentNode.leftChild); // recursive call on the left child
			roundUp(currentNode.rightChild); // recrusive call on the right child
		}
		roundUp(self.root); // call the recursive function on the root node
		if (temp.length === self.size) { // if the temp array has as many elements as we started with
			console.log('Delete value '+ deleteValue +' does not exist inside our tree.'); // delete value is not in tree
		} else {
			self.root = null;  // reset root to null to reinsert the values back into the array
			self.size = 0; // reset size to 0, size will be auto incremented by the insert method
			var toInsert;
			for (var i = 0; i < temp.length; i ++) { // reinsertion loop
				toInsert = temp[i]; // each of the values we want to reinsert
				self.insert(toInsert); // we are calling our insert method and passing in the value we want to insert back in
			}
			console.log('Delete value ' + deleteValue + ' has been removed.'); // message back to the user
		}
		
		console.log(self.root);
		console.log(self.size);
		return; // terminates the function
	}
}
/*------------------------------------------- Testing Infrastructure --------------------------------------------------*/
var test = new BinarySearchTree();
test.insert(5);
test.insert(3);
test.insert(4);
test.insert(10);
test.insert(12);
console.log(test.delete(12));