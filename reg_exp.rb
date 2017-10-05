def is_match(s, p)
    if s.length > p.length
        return false
    elsif s.length == p.length
        i = 0
        while i < s.length
            if s[i] == p[i]
                next
            elsif p[i].ord == 42 || p[i].ord == 46
                next
            elsif s[i] != p[i]
                return false
            end
            i = i + 1
            return true
        end
    else
        i = 0 
        new_str = p
        while i < new_str.length
            if s[i] == new_str[i]
                next
            elsif s[i] != new_str[i] && new_str[i+1].ord == 42
                pos = i+1
                new_str = new_str[0..pos-1] + new_str[pos+1..-1]  # new String
                next
            elsif new_str[i].ord == 42
                next
            elsif s[i] == nil && new_str[i-1].ord == 42
                next
            elsif s[i] != new_str[i]
                return false
            end
            i +=  1
        end
        return true
    end
    return false
end
