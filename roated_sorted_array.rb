def search(nums, target)
    i = 0
    nums.each_with_index do |num,idx|
        if num == target
            return idx
        end
    end
    return -1

end
