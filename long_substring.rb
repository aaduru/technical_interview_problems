#Given a string, find the length of the longest substring without repeating characters.

#Examples:

#Given "abcabcbb", the answer is "abc", which the length is 3.

#Given "bbbbb", the answer is "b", with the length of 1.

#Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


def length_of_longest_substring(s)

    long_sub_string = ''
    len = 0
    temp = 0

    s.each_char do |c|

        if long_sub_string.include?(c)

          index = long_sub_string.index(c)

          if long_sub_string.length > 1
            long_sub_string = long_sub_string.slice(index+1 ,long_sub_string.length)
          else
            long_sub_string = ''

          end

          long_sub_string += c
          if len < temp
            len = temp
          end
          temp = long_sub_string.length


        else
          long_sub_string += c

          temp += 1

        end
    end
    return temp if len <= temp
    return len if temp <= len
end

p length_of_longest_substring("dvdf")
p length_of_longest_substring("abcabcbb")
p length_of_longest_substring("bbbb")
p length_of_longest_substring("cdd")
