class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.text   :description, null: false
      t.integer :campaign_id
      t.integer :price, null: false
    end
    add_index :rewards, :campaign_id
  end
end
