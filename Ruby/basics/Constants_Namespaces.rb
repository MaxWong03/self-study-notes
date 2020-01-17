# A Module is a collection of methods, constants, and class variables. Modules are defined as a class, but with the module keyword not with class keyword. Important Points about Modules: You cannot inherit modules or you can't create a subclass of a module

# A namespace provides a container to hold things like functions, classes and constants as a way to group them together logically and to help avoid conflicts with functions and classes with the same name that have been written by someone else. In Ruby this is achieved using modules

require "pry"

module Apple
  FOUNDED_BY = "L. Ron Hubbard"
end

binding.pry

