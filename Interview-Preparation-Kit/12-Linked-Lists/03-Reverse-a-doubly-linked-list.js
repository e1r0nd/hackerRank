// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list

function reverse(head) {
    let isTaleFound = true;
    let current = head;
    
    // Do this till the tail is found
    while(isTaleFound) {
        // swing "prev" and "next" properties of the node
        const {prev, next} = current;
        current.prev = next;
        current.next = prev;

        // If the new "prev" is null
        if (current.prev === null) {
            // then the tail is found
            isTaleFound = false;
            // and mark new head as the current node
            head = current;
        }
        // otherwise move to the next node
        current = current.prev;
    }
    
    return head;
}