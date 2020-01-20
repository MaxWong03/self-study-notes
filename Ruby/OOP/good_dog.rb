# A module is a collection of behaviours 
# module is usable in other classes via mixin
# Module is a way to achieve polymorphism
# Polymorphism is the ability for data to be represented as many different types
module Speak
  def speak(sound)
    puts sound
  end
end

module Sleep
  def sleep(place)
    puts "I sleep on #{place}"
  end
end

class GoodDog
  include Speak # A module is "mixed in" to a class using include
  include Sleep
end

class HumanBeing
  include Speak
  include Sleep
end

sparky = GoodDog.new
sparky.speak("Arf!") # => Arf !
sparky.sleep("Dog bed")
bob = HumanBeing.new
bob.speak("Hello!") # => Hello !
bob.sleep("human bed")