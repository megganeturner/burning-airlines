var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'flights/:id': 'viewFlight'
  },

  home: function () {
    // app.flights = new app.Flights();
    // app.flights.fetch().done(function () {
    //   var appView = new app.AppView({ });
    //   appView.render();
<<<<<<< HEAD
    });
=======
    // });
>>>>>>> 5529f2baf448c6094e312bdf7e86550f6f34b003
  },

  viewFlight: function(id){
    // debugger;
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render();
  }
});
