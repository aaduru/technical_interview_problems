def range(min, max)
  return [] if max <= min
  range(min, max - 1) << max - 1
end

def sum_iter(nums)
  sum = 0
  nums.each { |num| sum += num }
  sum
end

def sum_rec(nums)
  return 0 if nums.empty?
  nums[0] + sum_rec(nums.drop(1))
end

def exp1(base, power)
  power == 0 ? 1 : base * exp1(base, power - 1)
end

def exp2(base, power)
  return 1 if power == 0

  half = exp2(base, power / 2)

  if power.even?
    half * half
  else
    # note that (power / 2) == ((power - 1) / 2) if power.odd?
    base * half * half
  end
end

class Array
  def deep_dup
    new_array = []
    self.each do |el|
      new_array << (el.is_a?(Array) ? el.deep_dup : el)
    end
    new_array
  end

  # The ultimate one-liner!
  def dd_map
    map { |el| el.is_a?(Array) ? el.dd_map : el }
  end
end

def fibs_iter(n)
  return [] if n == 0
  return [0] if n == 1

  fibs = [0, 1]

  while fibs.count < n
    fibs << fibs[-2] + fibs[-1]
  end

  fibs
end

def fibs_rec(n)
  if n <= 2
    [0, 1].take(n)
  else
    fibs = fibs_rec(n - 1)
    fibs << fibs[-2] + fibs[-1]
  end
end

class Array
  def subsets
    return [[]] if empty?
    subs = take(count - 1).subsets
    subs.concat(subs.map { |sub| sub + [last] })
  end
end
