class Animal
  attr_accessor :name
  
  def initialize(name)
    self.name = name
  end
end

class GoodDog < Animal
  attr_reader :color
  def initialize(name, color)
    super(name)
    @color = color
  end
end

class BadDog < Animal
  def initialize(age, name)
    super(name)
    @age = age
  end
end

bruno = GoodDog.new("bruno","brown") # => #<GoodDog:0x007fb40b1e6718 @color="brown", @name="brown">
puts bruno.name
puts bruno.color

BadDog.new(2, "bear")        # => #<BadDog:0x007fb40b2beb68 @age=2, @name="bear">
