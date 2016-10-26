class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :flights, :airplane_id, :airplane_id
  end
end
