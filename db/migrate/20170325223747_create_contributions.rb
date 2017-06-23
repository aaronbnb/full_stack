class CreateContributions < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
      t.integer :campaign_id, null: false
      t.integer :user_id,     null: false
      t.integer :reward_id
      t.integer :amount,      null: false

    end
    add_index :contributions, :user_id
    add_index :contributions, :campaign_id
  end
end
