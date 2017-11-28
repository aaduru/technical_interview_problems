def maxChocolates(arr)
  arr.each do |num|
    if num.odd?
      puts ((num + 1) / 2) ** 2 - (num + 1) / 2
    else
      puts (num / 2) ** 2
    end
  end
end
