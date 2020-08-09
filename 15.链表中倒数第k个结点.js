/**
 * 输入一个链表， 输出该链表中倒数第 k 个结点。 
 * 例如一个链表有6个结点， 从头结点开始它们的值依次是1、 2、 3、 4、 5、 6。 
 * 这个链表的倒数第3个结点是值为4的结点
 */
/**
 * 定义两个指针，让他们的索引相差k,当前一个到达链表的链尾时，第二个指针所在的位置就是倒数第K个节点
 */

 function findKthTail(head,k){
     if (!head || !k){
         return null
     }
     let prevEle=head;
     let nextEle=head;
     let index =1;
     while(prevEle.next){
         index++;
         prevEle=prevEle.next
         if (index>k){
             nextEle=nextEle.next
         }
     }
     if (k<=index){
         return nextEle
     }
     
 }