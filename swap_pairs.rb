# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}

def swap_pairs(head)

    new_list = ListNode.new(0)
    curr_node = ListNode.new(0)
    curr_node = head

    result_array = []

    until head.next.nil?
        result_array << head.val
    end

    i = 0
    first_node = ListNode.new(0)
    curr_node = first_node

    while i < result_array.length
        temp = result_array[i]
        if i+1 < result_array.length
            temp2 = result_array[i+1]
            curr_node.val = temp2
            curr_node.next = ListNode.new(0)
            curr_node.next.val = temp1
            curr_node = curr_node.next
        end
         temp = result_array[i]
       curr_node.val = temp
       curr_node.next = ListNode.new(0)
       curr_node = curr_node.next
       i += 2
    end

    # until curr_node.next.nil?
    #     next_node = ListNode.new(0)
    #     next_node = curr_node.next.next
    #     first_node = ListNode.new(0)
    #     first_node = curr_node
    #     curr_node = curr_node.next
    #     curr_node.next = first_node
    #     curr_node.next.next = next_node
    # end

    arr = []
    while (!curr_node.next.nil?)
        arr << curr_node.val
        curr_node = curr_node.next
    end
    return arr

end
