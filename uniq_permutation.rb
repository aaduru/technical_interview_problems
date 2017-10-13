def permute_unique(nums)
    nums = nums.permutation.to_a
    result_array = []
    i = 0
    while i < nums.length
        unless result_array.include?(nums[i])
            result_array << nums[i]
        end
        i = i+1
    end
    result_array
end
