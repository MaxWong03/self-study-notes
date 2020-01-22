class Student
  attr_accessor :name
  attr_writer :grade

  def initialize(name, grade)
    self.name = name
    @grade = grade
  end

  def better_grade_than?(student)
    "well done" if 
  end
end

joe = Student.new('joe', 30)
