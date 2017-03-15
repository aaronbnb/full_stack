class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 2, allow_nil: true }
  validates :session_token, presence: true

  before_validation :ensure_session_token

  attr_reader :password

  has_many :campaigns
  has_many :contributions
  has_many :rewards

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.password_is?(password)
    user
  end

  def password_is?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

end
