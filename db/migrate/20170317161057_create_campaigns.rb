class CreateCampaigns < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location
      t.string :overview
      t.integer :goal, null: false
      t.integer :status
      t.string :main_img_url
      t.integer :user_id
      t.integer :category_id
    end
    add_index :campaigns, :title
  end

end
