def reverse(x)
    number_array = x.to_s.split("")
    result_array = []
    if number_array.first.ord == 43 || number_array.first.ord == 45
        result_array << number_array.shift
    end
    (number_array.length).times  {|el| result_array<< number_array.pop}
    result = result_array.join("").to_i
    return result


end
