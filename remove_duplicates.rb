
def remove_duplicates(nums)

    i = 0
    len = nums.length
    while i < nums.length
        if i + 1 < nums.length && nums[i] == nums[i + 1 ]
            nums.delete_at(i + 1)
        else
          i = i+1
        end

    end
    p nums
    return nums.length

end
