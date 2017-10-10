# Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution
def three_sum_closest(nums, target)
    result_array = {}
    i = 0
    while i < (nums.length - 2)
        j = i + 1
        while j < (nums.length - 1)
            k = j + 1
            while k < nums.length

                temp = [nums[i] , nums[j] , nums[k]]
                sum = nums[i] + nums[j] + nums[k]
                temp = temp.sort
                unless result_array.has_key?(temp)
                  result_array[temp] = sum
                end
              k = k + 1
            end
            j = j+1
        end
        i = i+ 1
    end
    #p result_array
    sum_hash = {}
    result_array = result_array.sort_by { |k,v| v}
    #p result_array
      result_array.each do |key,val|
        return val if val == target
        sum_hash[val] = (target - val)
      end
  #p sum_hash
      #sum_hash.sort_by { |k,v| v.to_i}
      #p sum_hash
      return sum_hash.keys.last


end
p three_sum_closest( [-1, 2, 1, -4], 1)
