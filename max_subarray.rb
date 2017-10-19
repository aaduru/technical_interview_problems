def max_sub_array(nums)
    i = 0
    sub_array = []
    sum = 0
    while i < nums.length
        j = i+1
        while j < nums.length
            if sum < nums[i..j].inject(0, :+)
                sum = nums[i..j].inject(0, :+)
                sub_array = nums[i..j]
            end
            j = j+1
        end
        i = i+1
    end
   # sub_array
    sum
end
