class AddCapacityToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :capacity, :string
  end
end
