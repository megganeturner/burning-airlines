var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();

    app.flights = new app.Flights();
    app.flights.fetch().done(function () {
      app.flights.each(function (f) {
        var flightView = new app.FlightView({model: f});
      });
    });
  },
});
