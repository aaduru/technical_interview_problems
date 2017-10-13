def next_permutation(nums)
    nums_array = nums.permutation.to_a
    nums_array.map! { |el| el.join('') }

    first = nums_array.first.to_i
     i = 0

     while i < nums_array.length
      if nums_array[i].to_i > first
        return nums_array[i].split('')
      end
      i = i+1
     end
end

p next_permutation
