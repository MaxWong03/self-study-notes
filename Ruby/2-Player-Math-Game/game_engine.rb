require "./question.rb"

class GameEngine
  @@current_question = make_question
  def initialize(p1, p2)
    @p1 = p1
    @p2 = p2
    @current_player = @p1
  end

  def ask_question
    puts "#{@p2.name}: #{@@current_question.question}"
  end

  def validate_answer
    @@current_question.correct_answer === @@current_question.player_answer
  end

  def manage_lives
      @current_player.lives -= 1 if !validate_answer
  end

  def switch_turns
    if have_winner?
      announce_score
      if @current_player === p1 
        @current_player = @p2
      else
        @current_player = @p1
      end
      puts "----- NEW TURN -----"
    else
      declare_winner
    end
  end

  def declare_winner
    players = [@p1, @p2]
    winner = players.find {|player| player.point > 0}
    puts "----- GAME OVER! -----"
    puts "Player #{winner.name} wins with a score of #{winner.point}/3"
    puts "Good bye!"
  end

  private

  def make_question
    num_1 = rand(1..20)
    num_2 = rand(1..20)
    q = Question.new("What is #{num_1} plus #{num_2} equal?", num_1 + num_2)
  end

  def announce_score
    puts "P1: #{@p1.lives}/3 vs P2: #{@p2.lives}/3"
  end

  def have_winner?
    @p1.lives == 0 || @p2.lives == 0
  end

end