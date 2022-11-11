/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    const newHead = new ListNode(Number.NEGATIVE_INFINITY);
    let dummy = newHead;

    while(list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1;
            dummy = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            dummy = list2;
            list2 = list2.next;
        }
    }
    if(!list1) dummy.next = list2;
    if(!list2) dummy.next = list1;

    return newHead.next
};