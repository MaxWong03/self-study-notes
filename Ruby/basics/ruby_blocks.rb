def print_result
  result_from_block = yield
  puts result_from_block
end

print_result { 3 * 3 } # prints out 9

print_result do 
  creature = "walrus"
  "I am the #{creature}"
end #print out I am the walrus
