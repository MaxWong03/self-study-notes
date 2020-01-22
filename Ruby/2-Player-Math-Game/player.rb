class Player
  attr_accessor: lives, isWinner
  def initialize(lives, name)
    self.lives = lives
    @name = name
    self.isWinner = false
  end

  def answer_question
  end
end