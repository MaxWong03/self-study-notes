class MyCar
  attr_accessor :color
  attr_reader :year, :model
  def initialize (year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
  end

  def speed
    @speed
  end

  def speed_up(s)
    @speed += s
  end

  def break(s)
    @speed -= s
  end

  def shut_off
    @speed = 0
    puts "shutting car off"
  end

  def spray_paint(c)
    self.color = c
  end

  def to_s
    "My car is a #{self.color} #{self.model} from #{self.year} and is running at #{self.speed}"
  end

  def self.cal_gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles pere gallon of gas"
  end
end

toyota = MyCar.new(2008, 'grey', 'corlla')
puts toyota
toyota.spray_paint('red')
puts toyota
toyota.speed_up(30)
toyota.break(10)
puts toyota
toyota.shut_off
puts toyota
