#Given a digit string, return all possible letter combinations that the number could represent.

#A mapping of digit to letters (just like on the telephone buttons) is given below.

def letter_combinations(digits)

    hash_string = { 2 => ['a','b','c'], 3 => ['d','e','f'], 4=> ['g','h','i'],
                    5 => ['j','k','l'], 6 => ['m','n','o'], 7 => ['p','q','r','s'],
                    8 => ['t','u','v'], 9 => ['w','x','y','z']}

    digits = digits.to_s

    return [] if digits.length < 1
    return hash_string[digits.to_i] if digits.to_s.length == 1

    result = letter_combinations(digits.to_s.slice(1,(digits.to_s.length)).to_i)

    new_array = hash_string[digits.to_s.slice(0).to_i]

    new_result = []
    result.each do |val|
      new_array.each do |b|
        new_result << (val + b)
      end
    end

    return new_result

end

p letter_combinations(243)


def letter_combinations2(digits)

    hash_string = { 2 => ['a','b','c'], 3 => ['d','e','f'], 4=> ['g','h','i'],
                    5 => ['j','k','l'], 6 => ['m','n','o'], 7 => ['p','q','r','s'],
                    8 => ['t','u','v'], 9 => ['w','x','y','z']}

    digits = digits.to_s

    result_array = []

    i = 0
    new_result_array = []
    while i < digits.length
      p result_array
      if result_array.length == 0

        result_array = hash_string[digits[i].to_i]
        p result_array
      else
       p "here"
        len = result_array.length
         p len
        j = 0
        second_array = hash_string[digits[i].to_i]

          result_array.each do |a|
            second_array.each do |b|
              new_result_array << ( a + b )
            end
          end
        result_array = new_result_array

      new_result_array = []
      end

      i = i+1
    end
    return result_array
end

p letter_combinations(23456)
