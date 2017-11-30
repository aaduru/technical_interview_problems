def jumping_jack(action,k_step)
  start_step = 0
  1.upto(action) do |i|
    if start_step + i != k_step
      start_step = start_step + i

    else
      next
    end
    i = i+1
  end
  return start_step
end

p jumping_jack(4,2)
p jumping_jack(4,3)
