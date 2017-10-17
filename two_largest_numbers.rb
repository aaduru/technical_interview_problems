# given an array of integers, return the two largest integers in the array.

# input = array of integers
# output = 2 largest integers

# merge sort

# input array = [6,8,3,5,2,0,9]
# output = 6, 8

def two_largest_integers2(arr)
    largest_integer_array = []

    arr.each do |integer|
        if !largest_integer_array.include?(integer)
            if largest_integer_array.length <= 2
                if largest_integer_array.first < integer
                    largest_integer_array.first = integer
                end
                 if largest_integer_array.last < integer
                    largest_integer_array.last = integer
                end
                if largest_integer_array.length == 0
                    largest_integer_array << interger
                end
            end
        end



end

def two_largest_integers(arr)

    sorted_array = merge_sort(arr)
    largest_integer = sorted_array.last
    second_largest_integer = sorted_array[-2]

    return largest_integer, second_largest_integer
end

def merge_sort(arr)

    return arr if arr.length <= 1

    pivot = arr.length / 2

    left_array = arr.take(pivot)
    right_array = arr.drop(pivot)

    sorted_left = merge_sort(left_array)
    sorted_right = merge_sort(right_array)

    merge(sorted_left, sorted_right)
 end

def merge(left, right)

    merged_array = []

    until left.empty? || right.empty?
      merged_array << ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
end

array = [6,8,3,5,2,0]

array1 = [88, 43, 88, 0, 8, 4,2,6,0]

p two_largest_integers(array)
p two_largest_integers(array1)
