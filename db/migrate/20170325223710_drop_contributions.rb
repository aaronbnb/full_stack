class DropContributions < ActiveRecord::Migration[5.0]
  def change
    drop_table :contributions
  end
end
