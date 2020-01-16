class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

Laura = Person.new('Laura');

puts Laura.name;

Laura.name = "nen"

puts "New Name for Luara #{Laura.name}"

