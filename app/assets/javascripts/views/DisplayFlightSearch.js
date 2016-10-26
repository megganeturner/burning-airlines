var app = app || {};

app.DisplayFlightSearch = Backbone.View.extend({
  el: '#displayFlightSearch',
  events: {
    'click button': 'searchFlight',
  },
  searchFlight: function () {
    // Retrieve the user's input
    var userSearchFlight = this.$el.find('textarea').val();

    this.$el.find('textarea').val('').focus();
  },
  render: function () {
    this.$el.html( $('#flightSearchView').html() );
  }
});
