var app = app ||{};

app.FlightListView = Backbone.View.extend({
  tagName: 'li', //Create a new element 'li' for each instance of this view.
  events: {
    'click': 'showFlight'
  },
  showFlight: function () {
    app.router.navigate('flights/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('flight_num'));
    this.$el.appendTo('#flightLists');
  }
});
