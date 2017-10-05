def is_palindrome(x)
    num = x.to_s
    if num[0].ord == 43 || num[0].ord == 45
        num = num[1..-1]
    end
    if num == num.reverse
        return true
    else
        return false
    end
end
