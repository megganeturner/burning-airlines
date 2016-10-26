var app = app || {};

app.searchInputView = Backbone.View.extend({
  el: "#searchForm",
  events: {
    'click button': 'searchFlights'
  },

  searchFlights: function () {
    // Get the origin out of the select tag
    var chosenOrigin = this.$el.find("#originSelect").val();
    // Get the destination out of the select tag
    var chosenDestination = this.$el.find("#destinationSelect").val();

    // Store flights from db with the selected origin and the selected destination as validFlights
    var validFlights = app.flights.where({ origin: chosenOrigin, destination: chosenDestination });

    $("#flightLists").html(""); // Empty out the flightLists to allow for current search

    if ( validFlights.length === 0 ) {
      $("#flightLists").html("No Flights Found!");
      return;
    }

    _.each( validFlights, function (f) { // Go through each flight and store the current one as f
      // Create a new flightListView
      var flightListView = new app.FlightListView({ model: f });
      flightListView.render();
    });
  },

  render: function () {
    var searchInputViewTemplate = $("#searchInputViewTemplate").html();
    this.$el.html(searchInputViewTemplate);

    // Get all of the origins
    var originsList = _.unique( app.flights.pluck( "origin" ));
    // Get all of the destinations
    var destinationsList = _.unique( app.flights.pluck( "destination" ));

    // Put the origins in the first select tag
    _.each( originsList, function( origin )
    {    $("#originSelect").append("<option>" + origin + "</option>");
    });

    // Put the destinations in the second select tag
    _.each( destinationsList, function( destination )
    {    $("#destinationSelect").append("<option>" + destination + "</option>");
    });

  }
});
