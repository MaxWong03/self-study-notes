# we put the swim method in the Fish class, but some mammals can swim as well. 
# We don't want to move the swim method into Animal because not all animals swim
# and we don't want to create another swim method in Dog because that violates the DRY principle. 
# For concerns such as these, we'd like to group them into a module and then mix in that module to the classes that require those behaviors.

# If it's an "is-a" relationship, choose class inheritance. 
# If it's a "has-a" relationship, choose modules. 
# Example: a dog "is an" animal; a dog "has an" ability to swim.

module Swimmable
  def swim
    "I am swimming!"
  end
end

class Animal;
end

class Fish < Animal
  include Swimmable # mixing in Swimmable module
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable # mixing in Swimmable module
end