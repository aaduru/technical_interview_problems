def int_to_roman(num)
    hash_rom = {
  "M" => 1000,
  "CM" => 900, "D" => 500, "CD" => 400, "C" => 100,
  "XC" => 90,  "L" => 50,  "XL" => 40,  "X" => 10,
  "IX" => 9,   "V" => 5,   "IV" => 4,   "I" => 1
}

hash_rom.map do |key,val|
  amt,num = num.divmod(val)
  key * amt
end.join

end
