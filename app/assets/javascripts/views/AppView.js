var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    this.$el.html( $('#appView').html() );

  }
})
