<<<<<<< HEAD
FlightView = Backbone.View.extend({
  model: app.Flight,
  url: '/flights',

  initialize: function () {
    this.render();
  },
  render: function() {
    var template = _.template($("#appView").html(), {});
    this.$el.html(template);
  }
});

$(document).ready(function () {
  var aView = new FlightView({el: $("#unique")});
});
=======
var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',
  model:  app.Flight,

  initialize: function(){
    this.on('add', function(f) {
      var flightView = new app.FlightView({model: f});
      flightView.render();
    })
  }
});
>>>>>>> dd9104b714a094140f96edf5542ea475da23692c
