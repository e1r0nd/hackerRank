// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list

function sortedInsert(head, data) {
  let isInserted = false;
  let currentNode = head;
  let prevNode = null;

  while (!isInserted) {
    if (!currentNode || currentNode.data > data) {
      const insertNode = {
        data,
        next: currentNode ? currentNode : null,
        prev: prevNode,
      };

      if (!currentNode) {
        prevNode.next = insertNode;
      } else {
        currentNode.prev && (currentNode.prev.next = insertNode);
        currentNode.prev = insertNode;
        !insertNode.prev && (head = insertNode);
      }
      isInserted = true;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}
