class Player
  attr_accessor :lives
  attr_reader :name
  def initialize(lives, name)
    self.lives = lives
    @name = name
  end

end