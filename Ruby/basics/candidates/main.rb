# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'

## Your test code can go here


# pp @candidates

# binding.pry

#testing experienced?
puts experienced?(@candidates[0]) == true
puts experienced?(@candidates[1]) == false

#testing qualified_candidates
puts qualified_candidates(@candidates)

# 5, 10, 13

# puts ordered_by_qualifications(@candidates)