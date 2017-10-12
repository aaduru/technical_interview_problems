def is_valid?(s)
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
    bracket_array.empty?
end

def generate_parenthesis(n)

    open_brac = '('
    close_brac = ')'

    brac_array =[]

    n.times do |i|
      brac_array << open_brac
      brac_array << close_brac
    end

    brac_permutation = brac_array.permutation().to_a

    result_array = []
    brac_permutation.each do |arr|
      arr = arr.join('')
      if is_valid?(arr) && !result_array.include?(arr)
        result_array << arr
      end
    end
    result_array

end
