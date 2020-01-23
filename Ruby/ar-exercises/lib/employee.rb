class Employee < ActiveRecord::Base
  belongs_to :store

  #Validations
  validates :first_name, :last_name, :store, presence: true
  validates :hourly_rate, presence: true, numericality: {
    greater_than_or_equal_to: 40, 
    less_than_or_equal_to: 200
  }
  

end
