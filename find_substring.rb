def find_substring(s, words)

    p_words = words.permutation.to_a
    p_words.map! { |el|  el.join('') }


    len = p_words[0].length
    return [] if p_words[0].length > s.length
    index_array = []
    i = 0
    while i < s.length
        new_string = s.slice(i,len)

        if p_words.include?(new_string)
            index_array << i
        end
        i = i + 1
    end
    index_array
end

def find_substring(s, words)

    p_words = words.permutation.to_a
    p_words.map! { |el|  el.join('') }


    len = p_words[0].length
    return [] if p_words[0].length > s.length
    index_array = []
    i = 0
    while i < s.length
        new_string = s.slice(i,len)

        if p_words.include?(new_string)
            index_array << i
        end
        i = i + 1
    end
    index_array
end
