# Using modules for namepsacing
# In this context, namespacing means organizing similar classes under a module. 
# In other words, we'll use modules to group related classes
module Mammal
  class Dog
    def speak(sound)
      p "#{sound}"
    end
  end

  class Cat
    def say_name(name)
      p "#{name}"
    end
  end
end

# We call classes in a module by appending the class name to the module with ::

buddy = Mammal::Dog.new
kitty = Mammal::Cat.new
buddy.speak("arf") # => "Arf!"
kitty.say_name("kitty") # => "kitty"