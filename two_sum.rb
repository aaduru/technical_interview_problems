#Given an array of integers, return indices of the two numbers such that they add up to a specific target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

def two_sum(nums, target)
    indices_array = []
    i = 0
    while i < nums.length
      j = i + 1
      while j < nums.length
        if nums[i] + nums[j] == target
          indices_array << i
          indices_array << j
        end
        j += 1
      end
      i += 1
    end
    return indices_array
end

p two_sum([2, 7, 11, 15],9)


def two_sum(nums, target)
    indices_array = {}
    count = 0
    i = 0
    while i < nums.length
      j = i + 1
      while j < nums.length
        if nums[i] + nums[j] == target
          count += 1
          indices_array[count] = [i,j]
        end
        j += 1
      end
      i += 1
    end
    return indices_array
end

p two_sum([2, 7, 11, 15,7,9,4,5],9)
