# You can pass a list of arguments, which will be converted into an array.
# That's what splat operator ("*") is for.
# def guests(*array)
#   array.each { |guest| puts guest }
# end

# Example
def print_two(*args)
  arg1, arg2, arg3, arg4 = args
  puts "arg3: #{arg3}, arg4: #{arg4}"
end

print_two(1,2)