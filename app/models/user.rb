class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6 }, allow_nil: true
  
  has_many :check_ins,
  foreign_key: :author_id,
  class_name: :CheckIn,
  dependent: :destroy

  has_many :drinks,
  through: :check_ins

  has_one_attached :photo

  after_initialize :ensure_session_token!

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64(64)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token!
    self.session_token ||= SecureRandom.base64(64)
  end
end
