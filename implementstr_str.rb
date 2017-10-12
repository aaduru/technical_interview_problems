def str_str(haystack, needle)
    index = 0
    i = 0

    len = haystack.length
    n = needle.length
    return -1 if needle.length > haystack.length

    while i < len
        if len - i >= n && haystack.slice(i,len) == needle
            return i
        end
        i = i + 1
    end
    if len == 0 && n == 0
        return 0
    end

    return -1

end
