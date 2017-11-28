def zig_zag (root)
  level = 0

  next_children = [root]
  until next_children.empty?

    level_arr = []

    until next_children.empty?
      level_arr << next_children.shift
    end

    level_arr.each { |el| next_children += el.children }

    until level_arr.empty?
      method = level.even? ? :pop : :shift
      p level_arr.send(method).value
    end
    level += 1
  end
end
