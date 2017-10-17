def two_sum(arr,sum)
  i = 0
  result_arr = []

  while i < arr.length
    j = i+1
    while j < arr.length
      if arr[i] + arr[j] == sum
        return [i,j]
      end
      j = j+1
    end
    i = i+1
  end
  result_arr
end

def two_sum2(arr,sum)
  i = 0
  result_arr = []
  index = 0
  while i < arr.length
    new_target = target - arr[i]
    index = binary_search(arr, new_target, i)
    if index
      return [i, index]
    end
    i = i+1
  end
  result_arr
end

def binary_search(arr, target, i)

end
