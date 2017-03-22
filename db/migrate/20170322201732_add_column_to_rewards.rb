class AddColumnToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :supply, :integer
  end
end
