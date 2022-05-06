class User < ApplicationRecord
  has_secure_password
  has_secure_token

  # Associations
  has_many :pokemons, dependent: :destroy

  # Validations
  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  def invalidate_token
    update(token: nil)
  end

  def self.authenticate(username, password)
    user = User.find_by(username: username)
    return false unless user&.authenticate(password)

    user.regenerate_token
    user
  end
end
