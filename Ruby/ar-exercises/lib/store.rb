class Store < ActiveRecord::Base
  #validation
  validates :name, presence: true, length: { minimum: 3 }
  validates :annual_revenue, presence: true, numericality: {
    greater_than_or_equal_to: 0
  }
  validate :carry_at_least_one_apparel

  has_many :employees, inverse_of: :store
  
  private
  def carry_at_least_one_apparel 
    if !mens_apparel && !womens_apparel
      errors.add(:mens_apparel, "Store must carry at least one of the men's or women's apparel")
      errors.add(:womens_apparel, "Store must carry at least one of the men's or women's apparel")
    end
  end
  
end
