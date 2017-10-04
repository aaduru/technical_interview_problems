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
      p long_sub_string
        if long_sub_string.include?(c)
            long_sub_string = ''
            if temp < len
              temp = 0
            else
              len = temp
              temp = 0
            end
            next
        else
            long_sub_string += c
            temp += 1
        end
    end
    len
end

p length_of_longest_substring("abcabcbb")
