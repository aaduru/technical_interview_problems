
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_two_lists(l1, l2)
    merged_list = ListNode.new(0)

    until l1.next.nil? || l2.next.nil?

      if l1.next < l2.next
        merged_list.val = l1.val
        merged_list.next = ListNode.new(0)
        merged_list.next = l1.next
        l1.next = l1.next.next

      else
        merged_list.val = l2.val
        merged_list.next = ListNode.new(0)
        merged_list.next = l2.next
        l2.next = l2.next.next
      end
    end
    curr_node = merged_list
    while (!curr_node.next.nil?)
        arr << curr_node.val
        curr_node = curr_node.next
    end
    return arr


end
