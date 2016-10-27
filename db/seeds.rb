# AIRPLANE
Airplane.destroy_all
a1 = Airplane.create :name => '747', :rows => 15, :columns => 4
a2 = Airplane.create :name => '777', :rows => 15, :columns => 4
a3 = Airplane.create :name => '737', :rows => 15, :columns => 4

# FLIGHT
Flight.destroy_all
f1 = Flight.create :flight_num => 1, :date => '2016-05-20', :origin => 'SYD', :destination => 'SFO'
f2 = Flight.create :flight_num => 2, :date => '2016-02-10', :origin => 'LHR', :destination => 'DXB'
f3 = Flight.create :flight_num => 3, :date => '2016-01-01', :origin => 'LHR', :destination => 'JFK'


a1.flights << f1 << f2 << f3
# a2.flights << f2
# a3.flights << f3

# RESERVATIONS
Reservations.destroy_all
r1 = Reservations.create :row => 5, :column => 1
r2 = Reservations.create :row => 15, :column => 4
r3 = Reservations.create :row => 18, :column => 2

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3

f1.reservations << r2 << r3

# USER
User.destroy_all
u1 = User.create :name => 'Cedric'
u2 = User.create :name => 'Meggan'
u3 = User.create :name => 'Tony'
