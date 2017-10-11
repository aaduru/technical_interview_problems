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

def merge_two_lists(l1, l2)
    merged_list = ListNode.new(0)

    until l1.next == nil || l2.next == nil
        merged_list.next = ListNode.new(0)
        if l1.next < l2.next
            merged_list.val = l1.val
            merged_list.next = l1.next

        else
            merged_list.val = l2.val
            merged_list.next = l2.next
        end
    end



end
