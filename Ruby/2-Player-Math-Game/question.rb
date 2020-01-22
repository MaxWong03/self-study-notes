class Question
  attr_accessor :player_answer
  attr_reader :question, :correct_answer
  def initialize(question, correct_answer)
    @question = question
    @correct_answer = correct_answer
  end

  def player_answer
    @player_answer
  end

  def store_answer(answer)
    self.player_answer = answer
  end
end
