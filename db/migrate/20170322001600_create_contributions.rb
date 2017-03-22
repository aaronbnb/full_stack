class CreateContributions < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
      t.integer :user_id
      t.integer :reward_id
      t.integer :campaign_id
      t.integer :amount
    end
    add_index :contributions, :user_id
  end
end
