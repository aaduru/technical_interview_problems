def happy_numbers(int)
  cache, num = Hash.new(false), int
  until num == 1
    cache[num] ? (return false) : cache[num] = true
    num = to_string(num)
  end
  true
end


def to_string(int)
  int.to_s.chars.map(&:to_i).reduce(&:+)
end
