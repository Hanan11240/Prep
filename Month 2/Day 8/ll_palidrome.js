// Approach 1
// Using Stack - O(n) Time and O(n) Space

let stack = []
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }


    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next) {
            // stack.push(temp.value);
            temp = temp.next
        }
        temp.next = newNode;
    }

    isPalindrome() {
        let currentNode = this.head;
        let stack = [];

        while (currentNode !== null) {
            stack.push(currentNode.value);
            currentNode = currentNode.next;
        }

        currentNode = this.head;

        while (currentNode !== null) {
            const curentValue = stack.pop();
            if (currentNode.value !== curentValue) {
                return false;
            }

            currentNode = currentNode.next;
        }

        return true;
    }
}

let ll = new LinkedList();
ll.append(1)
ll.append(2)
ll.append(2)
ll.append(1)
ll.append(1)
console.log(ll.isPalindrome())

//  Approach 2- O(n) Time and O(1) Space
// The approach involves reversing the second half of the linked list starting from the middle. After reversing, traverse from the head of the list and the head of the reversed second half simultaneously, comparing the node values. If all corresponding nodes have equal values, the list is a palindrome.


// Javascript program to check if linked 
// list is palindrome
// class Node {
//     constructor(d) {
//         this.data = d;
//         this.next = null;
//     }
// }

// // Function to reverse a linked list
// function reverseList(head) {
//     let prev = null;
//     let curr = head;
//     while (curr) {
//         let next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

// // Function to check if two lists are identical
// function isIdentical(n1, n2) {
//     while (n1 && n2) {
//         if (n1.data !== n2.data) {
//             return false;
//         }
//         n1 = n1.next;
//         n2 = n2.next;
//     }
//     return true;
// }

// // Function to check whether the list is palindrome
// function isPalindrome(head) {
//     if (head === null || head.next === null) {
//         return true; 
//     }

//     // Initialize slow and fast pointers
//     let slow = head;
//     let fast = head;

//     // Find the middle of the linked list
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     // Reverse the second half of the list
//     let head2 = reverseList(slow);

//     // Check if the two halves are identical
//     let ret = isIdentical(head, head2);

//     // Restore the original list
//     reverseList(head2); 

//     return ret;
// }

// // Linked list : 1->2->3->2->1
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(2);
// head.next.next.next.next = new Node(1);

// let result = isPalindrome(head);

// if (result) {
// 	console.log("true");
// } else {
// 	console.log("false");
// }