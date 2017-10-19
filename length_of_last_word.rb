def length_of_last_word(s)
    if s == ""
        return 0
    end
    words_array = s.split(' ')
    return words_array.last.length
end
