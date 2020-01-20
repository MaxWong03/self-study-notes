first, second, third = ARGV
puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"

print "Give me another number man:"
number = $stdin.gets.chomp
puts "Alright your last number is #{number}"