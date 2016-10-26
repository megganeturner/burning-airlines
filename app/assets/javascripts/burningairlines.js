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
