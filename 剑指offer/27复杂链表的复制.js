/**
 * 请实现函数ComplexListNode * Clone（ ComplexListNode * pHead）， 复制一个复杂链表。
 * 在复杂链表中， 每个结点除了有一个next指针指向下一个结点外， 还有一个others 指向链表中的任意结点或者NULL
 */
/**
 * ① 将 链表中的节点复制一份 作为其next 指向的下个节点
 * ② 同样的原理应用其others 指针指向
 * ③ 将上面的链表进行拆分
 * @param {} params
 */
function copy(head) {
  if (head === null) {
    return head;
  }
  cloneNodes(head);
  cloneOthers(head);
  return splitLinkList(head);
}
function cloneNodes(head) {
  let current = head;
  while (current) {
    let cloneNode = current; // clone 当前节点P1
    current.next = cloneNode; // 将当前节点的next 指向 cloneNode
    current = cloneNode.next; // 更新当前节点 进入下一轮循环
  }
  return head;
}
function cloneOthers(head) {
  let current = head;
  while (current) {
    let cloneNode = current.next; // 只复制上面clone的节点
    if (current.others) {
      // 存在
      cloneNode.others = current.others.next;
    } else {
      cloneNode.others = null;
    }
    current = cloneNode.next;
  }
  return head;
}
function splitLinkList(head) {
  let cloneHead = head.next;
  let cloneNode = cloneHead;
  let current = head;
  while (current) {
    current.next = cloneNode.next;
    current = cloneNode.next;
    if (current) {
      cloneNode.next = current.next;
      cloneNode = current.next;
    } else {
      cloneNode.next = null;
    }
  }
  return cloneNode;
}
