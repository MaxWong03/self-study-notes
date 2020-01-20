class GoodDog
  #act as getter and setter, attr_accessor takes symbol as argument
  # gives you 6 getter/setter, and 3 instance variabels
  attr_accessor :name, :height, :weight 
  #attr_reader gives you getter without setter
  #attr_writer gives you setter without reeader

  def initialize (n, h, w)
    #instance variable exists as long as the object instance exists
    @name = n
    @height = h
    @weight = w
  end

  def speak
    #calling the instance method (getter) instead of instance variable
    "#{self.name} says Arf!" # implicit return
  end

  def change_info(n,h,w)
    #when you can instance method within, you need to do self, otherwise it might think you are initing a local vairable
    self.name = n
    self.height = h
    self.weight = w
  end

  def info
    #you could do the same with getter, but its not requried
    "#{self.name} weighs #{self.weight} and is #{self.height} tall"
  end
end

sparky = GoodDog.new("Sparky", "10 inchees", "8 lbs")
puts sparky.speak # => Sparky says Arf!

fido = GoodDog.new("Fido", "5 inchees", "2 lbs")
puts fido.speak # => Fido says Arf!

puts sparky.name # => "Sparky", getter method
sparky.name = "Nen Sparky" # setter method
puts sparky.name # => "Nen Sparky"

cooper = GoodDog.new("Sparky", "12 inches", "10 lbs")
puts cooper.info # => Cooper weighs 10 ponuds and is 12 inches tall

cooper.change_info("Nen Coopere", "24 inches", "45 pounds")
puts cooper.info # # => Nen Cooper weighs 45 pounds and is 24 inches 