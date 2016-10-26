var app = app || {};

_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};


app.flights = new app.Flights();




app.BurningFlights = new app.Flights;

$(document).ready(function(){
  if ($('#main').length === 0) {
    return;
  }

  app.router = new app.Router();

  var app_view = new AppView({ el: $("#main") });

  flights.fetch().done(function(){
    Backbone.history.start();
  });
});
