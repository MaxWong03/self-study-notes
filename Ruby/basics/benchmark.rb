def benchmark
  start_time = Time.now
  yield
  end_time = Time.now
  return end_time - start_time
end

# Be careful, pasting this into IRB will take a long time to print.
# It's a loooong string. :)
long_string = "apple" * 100000000

running_time = benchmark { long_string.reverse }

puts "string.reverse took #{running_time} seconds to run"

running_time_2 = benchmark {("apple" * 1000).reverse}

puts running_time_2

puts running_time_2 <= running_time