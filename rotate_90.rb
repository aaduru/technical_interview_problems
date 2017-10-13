def rotate(matrix)
  transpose_array = []
  i = 0
  row = matrix[0].length
  column = matrix.length
  while i < row
    transpose_array[i] = []
    j = column - 1
    while j >= 0
    transpose_array[i] << matrix[j][i]
      j = j - 1
    end
    i = i+1
  end
  transpose_array
end

p rotate([[1,2,3],
[4,5,6],
[7,8,9]])
