class Bench < ActiveRecord::Base

  validates :description, :lat, :lon, presence: true

  def self.all_in_rectangle(bounds, capacity_range = {})
    capacity_range = { "min" => 1, "max" => 8 } if capacity_range.empty?
    capacity_range["max"] = 8 if capacity_range["max"] == "8+"
    puts bounds
    puts capacity_range

        Bench.where(lat: (bounds["south"].to_f..bounds["north"].to_f))
             .where(lon: (bounds["west"].to_f..bounds["east"].to_f))
             .where(capacity:(capacity_range["min"].to_i..capacity_range["max"].to_i))

  end
end
