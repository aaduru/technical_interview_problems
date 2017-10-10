#Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero

def three_sum(nums)

    result_array = []

    i = 0
    while i < (nums.length - 2)
        j = i + 1
        while j < (nums.length - 1)
            k = j + 1
            while k < nums.length

                if nums[i] + nums[j] + nums[k] == 0
                temp = [nums[i] , nums[j] , nums[k]]
                temp = temp.sort
                unless result_array.include?(temp)
                  result_array << temp
                end
                end
              k = k + 1
            end
            j = j+1
        end
        i = i+ 1


    end
    result_array
end

p three_sum([-1, 0, 1, 2, -1, -4])
