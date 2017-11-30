def find_island(mat)
  count = 0
  rows = mat.length
  cols = mat[0].length
  visted_islands = []

  mat.each_with_index do |val, row|
    val.each_with_index do |val2, col|

      if val2 == 1
        visted_islands << [row,col]
        arr =  co_ordinates(row,col,mat,visted_islands)
        if arr != visted_islands
          count += 1
        end
      end

    end
  end
  return count
end

def co_ordinates(row,col,mat,visted_islands)
  island_arr = []
  arr = [[row-1, col-1], [row-1,col],[row-1,col+1],
        [row, col-1],[row,col+1],
        [row+1, col-1], [row+1,col],[row+1,col+1]]

    arr.each do |el|
      if mat[el[0]][el[1]] == 1 && !visted_islands.include?(mat[el[0]][el[1]])
        island_arr << el
      end
    end
    if island_arr.empty?
      return visted_islands
    else
      island_arr.each do |el|
        visted_islands << el
        island_arr = co_ordinates(el[0],el[1],mat,visted_islands)
      end
    end
end



matrix = [[1,0,0,0,1],[1,0,0,0,0],[0,0,1,1,0]]
puts find_island(matrix)
