// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let index = 1;
    let currentNode = head;
    let nextNode = head.next;
    
    // Find the proper node by the position
    while(index < position && nextNode.next) {
        currentNode = nextNode;
        nextNode = nextNode.next;
        index += 1;
    }
    // Update the list
    const newNode = {
        data,
        next: currentNode.next
    }
    currentNode.next = newNode;

    // Return from head
    return head;
}
