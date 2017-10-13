def search_insert(nums, target)

    i = 0

    while i < nums.length

        if nums[i] == target
            return i

        elsif i == 0 && target < nums[i]
          return i

        elsif (i+1 == nums.length) && target > nums[i]
          return (i + 1 )

        elsif (i - 1 )  >= 0
          if target < nums[i] && target > nums [i - 1]
            return i
          end



        end
        i = i+1
    end

end

# [1,3,5,6], 2 → 1
# [1,3,5,6], 7 → 4
# [1,3,5,6], 0 → 0

p search_insert([1], 0)
p search_insert([1,3,5,6],5)
p search_insert([1,3,5,6],2)
p search_insert([1,3,5,6],7)
p search_insert([1,3,5,6],0)
