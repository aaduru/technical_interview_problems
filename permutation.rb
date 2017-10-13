def permute(nums)

#     return [] if nums.length == 0

#     return nums[0]  if nums.length == 1

#     result_array = permute(nums.slice(1, nums.length))

#     new_array = nums.slice(0)

#     new_result = []

#     result_array.each do |a|
#         new_array.each do |b|
#             new_result << [a, b] << [b , a]
#         end
#     end

#     return new_result
  return [nums] if nums.length < 2
  first = nums[0]
  permute(nums[1..-1]).each_with_object([]) do |perm, result|
    (0..perm.size).each { |i| result << perm.dup.insert(i,first) }
  end

end
