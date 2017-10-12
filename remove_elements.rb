def remove_element(nums, val)
    len = nums.length
    i = 0

    while i < len

        if nums[i] == val
          nums.delete_at(i)
          len - 1
        else
          i = i+1
        end

    end
    return nums.length
end
