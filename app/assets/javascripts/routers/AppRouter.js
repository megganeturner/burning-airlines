var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'flights/:id': 'viewFlight'
  },

  home: function () {

      var appView = new app.AppView();
      appView.render();

  },

  viewFlight: function(id){
    // debugger;
    app.baReservations = new app.Reservations();
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render();
  }
});
