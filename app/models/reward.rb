class Reward < ApplicationRecord
  validates :title, :price, presence: true

  belongs_to :campaign
  belongs_to :user
  
end
