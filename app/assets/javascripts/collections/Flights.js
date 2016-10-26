var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model:  app.Flight,

  initialize: function(){
    this.on('add', function(f) {
      var flightView = new app.FlightView({model: f});
      flightView.render();
    })
  }
});
