#There are two sorted arrays nums1 and nums2 of size m and n respectively.

#Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


def find_median_sorted_arrays(nums1, nums2)

    l1 = nums1.length
    l2 = nums2.length

    n1 = nums1
    n2 = nums2

   median1 = 0
    median2 = 0

    total_len = l1 + l2

    if l1.even? && l1 > 0
        median1 = ( n1[(l1/2) - 1 ] + n1[(l1/2)] ) / 2
    else
        median1 = n1[l1/2]
    end

    if l2.even? && l2 > 0
        median2 = ( n2[(l2/2) - 1 ] + n2[(l2/2)] ) /2
    else
        median2 = n2[l2/2]
    end

    if median1 < median2
        n1,n2,l1,l2,median1,median2 = n2,n1,l2,l1,median2,median1
    end

    new_postion = total_len / 2

    i = 1
    newm1 = median1
    newm2 = median2

    while i <= new_postion
        m1 = l1 /2
        m2 = l2 /2

        if newm1 < newm2
             newm1 = n1([l1/2 - i])
             newm2 = n2 ([l2/2 + i])
        elsif newm1 == newm2
            return newm1
        else
            return n2[((l2/2) - i) + 1 ]
        end


        i = i +1
    end
end


#There are two sorted arrays nums1 and nums2 of size m and n respectively.

#Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).


def find_median_sorted_arrays(nums1, nums2)

    l1 = nums1.length
    l2 = nums2.length

    n1 = nums1
    n2 = nums2

   median1 = 0
    median2 = 0

    total_len = l1 + l2

    if l1.even? && l1 > 0
        median1 = ( n1[(l1/2) - 1 ] + n1[(l1/2)] ) / 2
    else
        median1 = n1[l1/2]
    end

    if l2.even? && l2 > 0
        median2 = ( n2[(l2/2) - 1 ] + n2[(l2/2)] ) /2
    else
        median2 = n2[l2/2]
    end

    if median1 < median2
        n1,n2,l1,l2,median1,median2 = n2,n1,l2,l1,median2,median1
    end

    new_postion = total_len / 2

    i = 1
    newm1 = median1
    newm2 = median2

    while i <= new_postion
        m1 = l1 /2
        m2 = l2 /2

        if newm1 < newm2
             newm1 = n1([l1/2 - i])
             newm2 = n2 ([l2/2 + i])
        elsif newm1 == newm2
            return newm1
        else
            return n2[((l2/2) - i) + 1 ]
        end


        i = i +1
    end
end
