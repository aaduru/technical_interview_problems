class ListNode
   attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def remove_nth_from_end(head, n)

   temp_node = ListNode.new(0)

   temp_node.next = head

   len = 0

   first = head

   while first != nil
     len += len
     first = first.next
   end

   len = len - n

   first = temp_node

   while len > 0
     len = len -1
     first = first.next
   end

   first.next = first.next.next

   return temp_node.next
end
