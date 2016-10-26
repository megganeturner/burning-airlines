var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    t.integer: "flight_num",
    t.date:    "date",
    t.string:  "origin",
    t.string:  "destination",
    t.integer: "airplanes_id"
  }
});
