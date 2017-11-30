#Given a dictionary of all words in the english language, return all word pairs that, when concatenated, form a palindrome

#Optimum time complexity is O(n*k^2) where n is the number of words in the dictionary, and k is the average length of word.

#HINT: given ['badd', 'ab', 'bada'], what aspect of 'badd' makes 'baddab' a palindrome, but 'badaab' is not?

#BONUS: How can you use Tries to solve this problem?


def is_palindrome?(word)
  if word == word.reverse
    return true
  else
    return false
  end
end


def palindrome_dictionary(arr)
  pali_words_arr = []
  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      new_word = arr[i]+ arr[j]
      if is_palindrome?(new_word)
        pali_words_arr<< [arr[i], arr[j]]
      end
      j += 1
    end
    i += 1
  end

  return pali_words_arr
end


puts palindrome_dictionary(["mad","am","co","oc","dam","mad","cookie"])






def is_palindrome?(word)
  if word == word.reverse
    return true
  else
    return false
  end
end


def palindrome_dictionary(arr)
  pali_words_arr = []
  i = 0
  while i < arr.length
    j = i + 1
    while j < arr.length
      if arr[i[0]] == arr[j[-1]]
        if arr[i[1]] == arr[j[-2]]
          new_word = arr[i]+ arr[j]
          if is_palindrome?(new_word)
            pali_words_arr<< [arr[i], arr[j]]
          end
        end
      end
      j += 1
    end
    i += 1
  end

  return pali_words_arr
end

puts palindrome_dictionary(["mad","dam","mad","cookie"])
#puts is_palindrome?("reverse")
#puts is_palindrome?("madam

convert  it into a Hash that way n + n(2k2)
ba aab
ba dcab
ba dcdab


leet code tries

records and logs

dev ops

scalability ,
