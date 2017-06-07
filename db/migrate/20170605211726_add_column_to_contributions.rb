class AddColumnToContributions < ActiveRecord::Migration[5.0]
  def change
    add_column :contributions, :created_at, :datetime
  end
end
