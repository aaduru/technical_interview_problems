def is_palindrome?(s)
    temp = s.reverse
    if s == temp
        return true
    else
        return false
    end
end
def longest_palindrome(s)
  long_string = ''
  new_string = ''
  i = 0
  j = 0
  while i < s.length
    j = i + 1
    new_string = ''
    new_string << s[i]
    while j < s.length
      new_string << s[j]
      if is_palindrome?(new_string)
        if  long_string.length <= new_string.length
          long_string = new_string
        end
      end
      j += 1
    end
    i +=1
  end
  return long_string
end
p longest_palindrome("babad")
