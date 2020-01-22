module Liftable
  def load_up_heavy_stuff
    puts "I am loading up some heavy stuff"
  end
end

class Vehcile
  attr_accessor :color
  attr_reader :year, :model
  @@NUM_OF_VECHILES = 0

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
    @@NUM_OF_VECHILES += 1
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

  def self.get_num_of_vehciles
    @@NUM_OF_VECHILES
  end

  def age
    cal_age.to_s
  end

  private 

  def cal_age
    Time.now().year.to_i - self.year.to_i
  end
  
end

class MyCar < Vehcile
  TYPE = "SUV"
  def initialize(year, color, model)
    super(year, color, model)
  end
end


class MyTruck < Vehcile
  TYPE = "TRUCK"
  def initialize(year, color, model)
    super(year, color, model)
  end

  include Liftable
end

my_car = MyCar.new('1993', 'red', 'crolla')
my_truck = MyTruck.new('1995', 'grey', 'tesla')
puts my_car

puts Vehcile.get_num_of_vehciles

my_truck.load_up_heavy_stuff

puts "My car is #{my_car.age} old"