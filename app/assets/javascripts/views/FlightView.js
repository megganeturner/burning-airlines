var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click td': 'seatSelect',
    'click #submit': 'confirmSeat'
  },

  seatSelect: function(event){
    if ($(event.target).hasClass('unavailable')) {
      return;
    } else {

      var seatNumber = $(event.target).attr('id');


    //   $('#planeSeatsTable tr').each(function(){
    //     $(event.target).find('td').each(function(){
    //       if ($(this).html() == current_user_id) {
    //         $(this).removeClass('unavailable');
    //         $(this).html($(this).attr('id'));
    //       }
    //     })
    //   })
    //   $(this).html(current_user_id);
    $(event.target).addClass('unavailable');
    }
    // availableSeats = totalSeats - $('.unavailable').length;
  },

  confirmSeat: function(){
    $('#planeSeatsTable tr').each(function(){
      $(this).find('td').each(function(){
        if ($(this).hasClass('unavailable')) {
          var seatNumber = $(this).attr('id');
          app.baReservations.create({seat:seatNumber});
        }
      })
    });


  },

  render: function () {

    var flightViewTemplate = _.template( $('#flightView').html());
    this.$el.html( flightViewTemplate( this.model.toJSON() ));

    var airplaneId = this.model.get('airplane_id');

    var flight = this.model;

    // var plane = app.Airplane. withID(airplaneId)

    var createPlane = function() {
      console.log('createPlane', flight);
      var cols = flight.attributes.airplane.columns;
      var rows = flight.attributes.airplane.rows;
      console.log(cols, rows);
      var totalSeats = cols * rows;
      var availableSeats = totalSeats;
      var currentUserSeats = [];
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

    //
    //   $('#clear').on('click', function(){
    //     $('#planeSeatsTable tr').each(function(){
    //       $(this).find('td').each(function(){
    //         if ($(this).html() == current_user_id) {
    //           $(this).removeClass('unavailable');
    //           $(this).html($(this).attr('id'));
    //         }
    //       })
    //     })
    //   });
    //
    //   $('#submit').on('click', function(){
    //     $('#planeSeatsTable tr').each(function(){
    //       $(this).find('td').each(function(){
    //         if ($(this).html() == current_user_id) {
    //           currentUserSeats.push($(this).attr('id'));
    //         }
    //       })
    //     })
    //   });
    };
    createPlane();
  }

});
