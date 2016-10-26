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

    var appView = new app.AppView({ });
    appView.render();
    
  });




  $('#showSeats').on('click', function(){
    console.log('clicked');
    cols = 4;
    rows = 20;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    var columns = _.range(1, cols + 1);
    var columnNames = alphabet.slice(0, cols);
    var zipped = _.zip(columns, columnNames);

    for (var r = 0; r < parseInt(rows); r++){
      var row = document.getElementById('planeSeatsTable').insertRow(r);
      for (var c = 0; c < parseInt(cols); c++) {
        var cell = row.insertCell(c);
        cell.setAttribute('id', ( (r+1).toString()+ zipped[c][1]));
        cell.innerHTML= cell.id;
      }
    }
  });





});

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
