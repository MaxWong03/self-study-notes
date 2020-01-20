# A module is a collection of behaviours 
# module is usable in other classes via mixin
# Module is a way to achieve polymorphism
# Polymorphism is the ability for data to be represented as many different types
module Speak
  def speak(sound)
    puts sound
  end
end

class GoodDog
  include Speak # A module is "mixed in" to a class using include
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
sparky.speak("Arf!") # => Arf !
bob = HumanBeing.new
bob.speak("Hello!") # => Hello !