def is_valid(s)

    return false if s.length.odd?
    return false if s =~ /[^\[\]\(\)\{\}]/

    hash_map = { '{' => '}', '[' => ']', '(' => ')' }

    bracket_array = []

    s.chars do |char|

        if bracket = hash_map[char]
            bracket_array << bracket
        else
            return false unless bracket_array.pop == char
        end
    end

    bracket_array.empty?
end
