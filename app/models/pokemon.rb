class Pokemon < ApplicationRecord
  # Associations
  belongs_to :user

  # Validations
  validates :jsonData, presence: true
end
