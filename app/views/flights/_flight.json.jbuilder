json.extract! flight, :id, :flight_num, :date, :origin, :destination, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)