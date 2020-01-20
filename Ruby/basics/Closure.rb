require "pry"

class Array
  def for_each
    i = 0
    while i < self.size
      yield(self[i])
      i += 1
    end
    self #implicit return
  end
end

#block example
[1, 2, 3].for_each { |num| puts num }

#Proc example

#Proc is a class, block is an instance / object of the Proc class
my_proc = Proc.new { |num| puts "my proc prints #{num}" }

#call with &
[1, 2, 3].for_each(&my_proc)

binding.pry