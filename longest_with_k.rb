def longest_with_k_unique(str, k)
  start = 0
  finish = 0
  uniques = Hash.new(0)
  uniques_count = 0
  longest = [start, finish]
  chars = str.chars
  chars.each_with_index do |char, i|
    uniques_count += 1 if uniques[char] == 0
    uniques[char] += 1
    finish = i
    if uniques_count > k
      # p "exceeded at #{i}", uniques
      until uniques_count <= k
        uniques[chars[start]] -= 1
        uniques_count -= 1 if uniques[chars[start]] == 0
        start += 1
        # p uniques
      end
    end
    if finish - start >= longest[1] - longest[0]
      longest = [start, finish]
    end
  end
  result = str[longest[0]..longest[1]]
  p uniques_count == k ? [result, longest] : "No substring with that number of uniques found!"
end
