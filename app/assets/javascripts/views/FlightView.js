var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
  },

  render: function () {
    var flightViewTemplater = _.template( $('#flightView').html());
    this.$el.html( flightViewTemplater( this.model.toJSON() ));

    var airplaneId = this.model.get('airplane_id');

  },

  showFlight: function () {
    var createPlane = function() {
      // cols = this.model.Airplane.get('columns');
      // rows = this.model.Airplane.get('rows');
      cols = 4;
      rows = 20;

      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

      var columns = _.range(1, cols + 1);

      var columnNames = alphabet.slice(0, cols);

      var zipped = _.zip(columns, columnNames);

      for (var r = 0; r < parseInt(rows); r++){
        var row = $('#planeSeatsTable').insertRow(r);
        for (var c = 0; c < parseInt(cols); c++) {
          var cell = row.insertCell(c);
          cell.innerHTML=(r+1)+(zipped[c][1]);
          cell.setAttribute('id', ( (r+1).toString()+ zipped[c][1]));
        }
      }
    };

    createPlane();
    router.navigate('flights/' + this.model.get('id'), true);
  }
});
