var app = app || {};

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,
  interpolate : /\{\{([\s\S]+?)\}\}/g
};

app.flightList = new app.Flights();

$(document).ready(function () {

  app.flights = new app.Flights();
  app.flights.fetch().done(function () {

    app.router = new app.AppRouter();
    Backbone.history.start();

    // var appView = new app.AppView({ });
    // appView.render();
  });




});
