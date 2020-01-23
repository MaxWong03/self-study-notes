require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

# Your code goes here ...
@store1.employees.create({
  first_name: "Max",
  last_name: "Wong",
  hourly_rate: 60
})

@store1.employees.create({
  first_name: "Laura",
  last_name: "Tan",
  hourly_rate: 60
})

@store1.employees.create({
  first_name: "Joseph",
  last_name: "Tu",
  hourly_rate: 22
})

@store2.employees.create({
  first_name: "Ralph",
  last_name: "Gracie",
  hourly_rate: 30
})

@store2.employees.create({
  first_name: "Clark",
  last_name: "Gracie",
  hourly_rate: 40
})

@store2.employees.create({
  first_name: "Kron",
  last_name: "Gracie",
  hourly_rate: 50
})

#You could also do it this way, but then you will have to reference it using the actual instance / object 
Employee.create({
  store: @store1,
  first_name: "Rickson",
  last_name: "Gracie",
  hourly_rate: 99
})

puts "There are #{@store1.employees.count} at the #{@store1.name}"
puts "There are also #{@store2.employees.count} at the #{@store2.name} store"


"These are the employees at #{@store1.name}"
@store1.employees.each {|employee| puts "First Name: #{employee.first_name}, Last Name: #{employee.last_name}, Hourly Rate: #{employee.hourly_rate}"}

"These are the employees at #{@store2.name}"
@store2.employees.each {|employee| puts "First Name: #{employee.first_name}, Last Name: #{employee.last_name}, Hourly Rate: #{employee.hourly_rate}"}