class Player
  attr_accessor :lives, :isWinner, :name
  def initialize(name)
    @name = name
  end

  def answer_question()

end

# player_1 = new Player('player_1_name')
# player_2 = new Player('player_2_name')

# game_engine = new Game_Engine(player_1, player_2)

# game_engine.start_game()

# while(!is_there_winner())
# question = game_engine.make_question()
# player_answer = ask_question(question, game_engine.current_player)
# manage_lives(answer, game_engine.current_player)
# switch_turns()
#   if (is_there_winner()) 
#     game_engine.end_game()
#   else
#     announce_score() 
