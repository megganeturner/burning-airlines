var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
  },

  render: function () {

    var flightViewTemplate = _.template( $('#flightView').html());
    this.$el.html( flightViewTemplate( this.model.toJSON() ));

    var airplaneId = this.model.get('airplane_id');

    var flight = this.model;

    console.log(this.model);

    var createPlane = function() {
      console.log(flight);
      cols = 4;
      rows = 10;
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
    };

    createPlane();


  }

});
