def search_range(nums, target)

  i = 0

  result_array = []
  while i < nums.length
    if nums[i] == target
      result_array << i
    end
    i = i+1
  end
  if result_array.length == 0
      return [-1,-1]
  else
    return result_array
  end
end
