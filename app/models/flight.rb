# == Schema Information
#
# Table name: flights
#
#  id           :integer          not null, primary key
#  flight_num   :integer
#  date         :date
#  origin       :string
#  destination  :string
#  airplanes_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Flight < ActiveRecord::Base
end
