# print "Give me a number: "
# number = gets.chomp.to_f

# bigger = number * 100
# puts "A bigger number is #{bigger}"

# print "Give me another number: "
# another_number = gets.chomp
# number = another_number.to_f

# smaller = number / 100
# puts "A smaller number is #{smaller}"

def take_yo_money()
  puts "Ay gimme some money bro:"
  money = gets.chomp.to_f
  puts "Okay I will give you some of it back 🌚: #{(money * 0.1).round(2)}"
end

take_yo_money()