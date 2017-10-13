def my_transpose(matrix)
  transpose_array = []
  i = 0
  row = matrix[0].length
  column = matrix.length
  while i < row
    transpose_array[i] = []
    j = 0
    while j < column
    transpose_array[i] << matrix[j][i]
      j = j+1
    end
    i = i+1
  end
  transpose_array
end

p my_transpose([[1,2,3],
[4,5,6],
[7,8,9]])
