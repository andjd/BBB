class Bench < ActiveRecord::Base

  validates :description, :lat, :lon, presence: true

  def self.all_in_rectangle(north, south, east, west)
        Bench.where(lat: (south.to_f..north.to_f))
         .where(lon: (west.to_f..east.to_f))

  end
end
