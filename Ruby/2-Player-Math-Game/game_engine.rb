require "./question.rb"
require "byebug"

class GameEngine
  def initialize(p1, p2)
    @p1 = p1
    @p2 = p2
    @current_player = @p1
    @current_question = make_question
  end

  def ask_question
    puts "#{@current_player.name}: #{@current_question.question}"
    player_answer = gets.chomp
    @current_question.store_answer(player_answer)
  end

  def validate_answer
    @current_question.correct_answer == @current_question.player_answer.to_i
  end

  def manage_lives
    if !validate_answer
      puts "#{@current_player.name}: Seriously !? Nen!"
      @current_player.lives -= 1 
    else
      puts "#{@current_player.name}: Yes! You are correct."
    end
  end

  def switch_turns
    unless self.have_winner?
      announce_score
      if @current_player === @p1 
        @current_player = @p2
      else
        @current_player = @p1
      end
      @current_question = make_question
      puts "----- NEW TURN -----"
    else
      declare_winner
    end
  end

  def have_winner?
    @p1.lives == 0 || @p2.lives == 0
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

  def declare_winner
    players = [@p1, @p2]
    winner = players.find {|player| player.lives > 0}
    puts "Player #{winner.name} wins with a score of #{winner.lives}/3"
    puts "----- GAME OVER! -----"
    puts "Good bye!"
  end

end