#There are two sorted arrays nums1 and nums2 of size m and n respectively.

#Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


def find_median_sorted_arrays(nums1, nums2)

    len1 = nums1.length
    len2 = nums2.length


    if len1 > len2
        nums1,nums2,len1,len2 = nums2,nums1,len2,len1
    end

    min_len = 0
    max_len = len1
    half_len = (len1 + len2 + 1 ) / 2

    while min_len <= max_len
        i = (min_len + max_len) / 2
        j = half_len - 1
        if i < len1 && nums2[j-1] > nums1[i]
            min_len = i + 1
        elsif i > 0 && nums1[i-1] > nums2[j]
            max_len = i -1
        else
            if i == 0
                max_left = nums2[j-1]
            elsif j == 0
                max_left = nums1[i-1]
            else
                max_left = [nums1[i-1],nums2[j-1]].max
            end

            if i == len1
                max_right = nums2[j]
            elsif j == len2
                max_right = nums1[i]
            else
                max_right = [nums1[i],nums2[j]].min
            end
            return ((max_left + max_right) / 2.0).round.to_f
        end
    end

    return 0.0

end
