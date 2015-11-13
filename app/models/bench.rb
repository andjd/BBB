class Bench < ActiveRecord::Base

  validates :description, :lat, :lon, presence: true

  def self.all_in_rectangle(north, south, east, west)
    Bench.where("lat BETWEEN ? AND ?", south, north)
         .where("lon BETWEEN ? AND ?", east, west)
  end
end
