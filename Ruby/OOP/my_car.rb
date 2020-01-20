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

  def info
    puts "My car is a #{self.color} #{self.model} from #{self.year} and is running at #{self.speed}"
  end
end

toyota = MyCar.new(2008, 'grey', 'corlla')
toyota.info
toyota.spray_paint('red')
toyota.info
toyota.speed_up(30)
toyota.break(10)
toyota.info
toyota.shut_off
toyota.info
