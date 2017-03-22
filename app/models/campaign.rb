class Campaign < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_many :rewards

end
