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
