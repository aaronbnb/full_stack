class Contribution < ApplicationRecord
  validates :user_id, :campaign_id, :amount, presence: true

  belongs_to :campaign
  belongs_to :user

end
