class RemoveRowFromReservation < ActiveRecord::Migration
  def change
    remove_column :reservations, :row, :integer
  end
end
