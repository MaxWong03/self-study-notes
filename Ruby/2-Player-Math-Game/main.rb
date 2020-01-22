require "./question.rb"
require "./player.rb"
require "./game_engine.rb"
require "byebug"

p1 = Player.new(3, 'Player 1')
p2 = Player.new(3, 'Player 2')
game_engine = GameEngine.new(p1, p2)

while !game_engine.have_winner?
  game_engine.ask_question
  game_engine.validate_answer
  game_engine.manage_lives
  game_engine.switch_turns
end