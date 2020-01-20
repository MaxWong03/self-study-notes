class GoodDog
  @@number_of_dogs = 0
  DOG_YEARS = 7
  
  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = a * DOG_YEARS
    @@number_of_dogs += 1
  end

  # Objects contain state
  # if we have a method that does not need to deal with state
  # then wee can just use a class method
  def self.what_am_i # Class method definition
    "I am a GoodDog class!"
  end

  def to_s
    "This dog's name is #{name} and it is #{age} in dog years"
  end

  #private method has to be called without self, you can do it with self for ruby2.7
  def public_disclosure
    "#{self.name} in human years is #{human_years}"
  end

  private

  def human_years
    age * DOG_YEARS
  end
end

GoodDog.what_am_i # => "I am a GoodDog class"

puts GoodDog.total_number_of_dogs # => 0
dog1 = GoodDog.new("dog", 3)
dog2 = GoodDog.new("dog", 5)

puts GoodDog.total_number_of_dogs # => 2
puts dog1.age
