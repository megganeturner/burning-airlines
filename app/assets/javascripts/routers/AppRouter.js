var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
    // 'flights': 'showFlights',
    // 'flight/:id': 'showFlight'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();
  }

  // showFlights: function() {
  //   flightsListView.render();
  // }
  //
  // showFlight: function(){
  //   var flight = flights.get(id);
  //   var flightView = new app.FlightView({model: flight});
  //   flightView.render();
  // }
});
