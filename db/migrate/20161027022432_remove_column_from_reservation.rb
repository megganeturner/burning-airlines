class RemoveColumnFromReservation < ActiveRecord::Migration
  def change
    remove_column :reservations, :column, :integer
  end
end
