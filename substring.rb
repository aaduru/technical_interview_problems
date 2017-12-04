def substring(a,b)
  i = 0
  a.each_char do |l|
    new_string = a.slice(i..a.length)
    if new_string == b
      return i
    end
    i += 1
  end
  return -1
end

puts substring('javascript','script')
