class User < ApplicationRecord
  has_secure_password

  # Validations
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
end
