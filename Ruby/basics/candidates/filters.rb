# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  @candidates.bsearch { |candidate| candidate[:id] == id }
end

def experienced?(candidate)
  return false unless candidate[:years_of_experience] >= 2
  return true
end

def qualified_candidates(candidates)
  candidates.select {
    |candidate|
    experienced?(candidate) &&
    candidate[:github_points] >= 100 &&
    candidate[:languages].include?("Ruby" || "Python") &&
    candidate[:date_applied] >= 15.days.ago.to_date &&
    candidate[:age] >= 18
  }
end

# More methods will go below
def ordered_by_qualifications (candidates)
  candidates.sort_by{
    |candidate| 
    [candidate[:years_of_experience] * -1, 
    candidate[:github_points] * -1]
  }
end
