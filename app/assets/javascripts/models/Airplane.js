var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    name: '',
    rows: 0,
    columns: 0
  }
});
