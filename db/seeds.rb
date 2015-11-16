

Bench.create!(description: "McCarren Park Pool", lat: 40.720244, lon: -73.949396, capacity: 2)

Bench.create!(description: "Bushwick Inlet Park", lat: 40.722203, lon: -73.962104, capacity: 3)

Bench.create!(description: "Grand Ferry Park", lat: 40.716786, lon: -73.967019, capacity: 4)

Bench.create!(description: "Ascenzi Square", lat: 40.714486,  lon:  -73.957140, capacity: 8)

Bench.create!(description: "Jaime Campiz Playground", lat: 40.713770, lon: -73.953975, capacity: 5)

splay_factor = Proc.new {(((rand * 2 - 1) ** -1)/50)}

80.times do |num|
  Bench.create! ({ description: "Test Bench #{num}",
                  lat: 40.71 + splay_factor.call,
                  lon: -73.95 + splay_factor.call,
                  capacity: (rand * 8).floor + 1
                })
  end
