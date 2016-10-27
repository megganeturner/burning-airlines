var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,
  url: '/flights',

  initialize: function () {
    // Adding event handler
    this.on('add', function(flight) {
      // Create new FlightView
      // var flightView = new app.FlightView({ model: flight });
      // // Render
      // flightView.render();
    });
  },
});
