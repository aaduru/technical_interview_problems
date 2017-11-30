def rocks_and_water(str, speed = 0)

  return true if str[0] == '*' && str.length == 1

  return false if str[0] == '~'

  result1, result2, result3 = false, false, false

  unless speed == 0 || speed > str.length
    result1 = rocks_and_water(str[speed..-1], speed)
  end

  unless speed + 1 > str.length
    result2 = rocks_and_water(str[speed+1..-1], speed + 1)
  end

  unless speed == 0 || speed - 1 > str.length
    result3 = rocks_and_water(str[speed-1..-1], speed - 1)
  end

  result1 || result2 || result3
end
