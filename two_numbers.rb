#You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

#You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
#Output: 7 -> 0 -> 8

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    result_list = ListNode.new(0)
    mod = 0
    carry = 0
    until l1.next.nil? || l2.next.nil?
        value = l1.val + l2.val
        if carry != 0
            value = value + carry
            carry = 0
        end
        if value > 10
            mod = value % 10
            carry = value / 10
            result_list.val = mod
            result_list.next
        end

    end
    result_list
end
