#Given a digit string, return all possible letter combinations that the number could represent.

#A mapping of digit to letters (just like on the telephone buttons) is given below.

def letter_combinations(digits)

    hash_string = { 2 => ['a','b','c'], 3 => ['d','e','f'], 4=> ['g','h','i']
                    5 => ['j','k','l'], 6 => ['m','n','o'], 7 => ['p','q','r','s']
                    8 => ['t','u','v'], 9 => ['w','x','y','z']}

    result_string_array = []

    digits = digits.to_s.split('')

    digits.map!(&:to_i)







end
