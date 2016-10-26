var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,
  interpolate : /\{\{([\s\S]+?)\}\}/g
};

app.flightList = new app.Flights();

$(document).ready(function () {

  app.router = new app.AppRouter();
  Backbone.history.start();

})

// app.BurningFlights = new app.Flights;
//
// $(document).ready(function(){
//   if ($('#main').length === 0) {
//     return;
//   }
//
//   app.router = new app.Router();
//
//   var app_view = new AppView({ el: $("#main") });
//
//   flights.fetch().done(function(){
//     Backbone.history.start();
//   });
// });
