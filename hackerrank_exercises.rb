def maxDifference(a)
    maxval = 0
    i =0
   a.each_with_index do |el,i|
        j = i+1
        while j < a.length
            if a[j] > a[i]
                val = a[j]-a[i]
                if maxval < val
                    maxval = val
                end
            end
            j += 1
        end

    end
    if maxval == 0
        return -1
    else
        return maxval
    end
end


def maxDifference(a)
    maxval = 0
    i = a.length - 1
   big_arr = []

   while i >= 0

    j = 0
    found_max = 0
    while j < big_arr.length
      if a[i] <= big_arr[j]
        found_max = 1
      end
      j += 1
    end
    if found_max == 0 || big_arr.length == 0
      big_arr << a[i]
    end


    big_arr.each do |val|
      new_val = val - a[i]
      if new_val > maxval
        maxval = new_val
      end
    end

    i -= 1
   end


    if maxval == 0
        return -1
    else
        return maxval
    end
end


def braces(values)
  arr = []
  i = 0
  while i < values.length
    if is_valid(values[i])
      arr << 'YES'
    else
      arr << 'NO'
    end
    i += 1
  end
  return arr
end

def is_valid(s)

    return false if s.length.odd?
    return false if s =~ /[^\[\]\(\)\{\}]/

    hash_map = { '{' => '}', '[' => ']', '(' => ')' }

    bracket_array = []

    s.chars do |char|

        if bracket = hash_map[char]
            bracket_array << bracket
        else
            return false unless bracket_array.pop == char
        end
    end



    def numberOfPairs(a, k)
         arr = []
      i = 0
      count = 0

      while i < a.length
        j = i + 1

        while j < a.length
          if a[i] + a[j] == k
            if !arr.include?(a[i]) && !arr.include?(a[j])
              arr << a[i] << a[j]
              count += 1
            end
          end
          j += 1
        end
        i += 1
      end

      return count
    end


    def numberOfPairs(a, k)
         arr = []
      i = 0
      count = 0

      while i < a.length
        j = i + 1
        if a[i] < k
        while j < a.length
          if a[i] + a[j] == k
            if !arr.include?(a[i]) && !arr.include?(a[j])
              arr << a[i] << a[j]
              count += 1
            end
          end
          j += 1

        end
      end
        i += 1
      end


      return count
    end


puts numberOfPairs([1,2,3,67,34,67,878],60)
