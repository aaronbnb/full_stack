class Reward < ApplicationRecord
  validates :title, :price, presence: true

  belongs_to :campaign
end
