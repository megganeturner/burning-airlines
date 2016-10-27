var app = app || {};

app.Airplane = Backbone.Model.extend({
  initalize: function(){

  },
  urlRoot: '/airplanes',
  defaults: {
    name: '',
    rows: 0,
    columns: 0
  }
});
