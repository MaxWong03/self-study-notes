require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5"
puts "----------"

# Your code goes here ...
total_revenue = Store.sum(:annual_revenue)

puts "All the stores have total_revenue of #{total_revenue}"

average_revenue = Store.average(:annual_revenue)

puts "All the stores have average_revenue of #{average_revenue}"

num_of_profitable_stores = Store
                      .where(["annual_revenue >= ?", 1000000])
                      .count

puts "There are #{num_of_profitable_stores} that generate more than $1M in annual sales"