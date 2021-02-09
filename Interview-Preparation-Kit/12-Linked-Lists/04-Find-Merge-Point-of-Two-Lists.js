// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists

function findMergeNode(headA, headB) {
    const nodes = new Set();    
    let currentA = headA;
    let currentB = headB;
    
    // store the List A
    while (currentA) {
        // store the current node as we need
        // to compare "data" and "next" for each node
        nodes.add(currentA);
        // read next node
        currentA = currentA.next;
    }
    // walk through the List B
    while (currentB) {
        // if the common node is found
        if (nodes.has(currentB)) {
            // then return it
            return currentB.data;
        }
        // otherwise store visited node
        nodes.add(currentB);
        // and move to the next one
        currentB = currentB.next;
    }
}