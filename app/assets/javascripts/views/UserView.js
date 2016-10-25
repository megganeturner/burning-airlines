var app = app || {};

app.UserView = Backbone.View.extend({
  tagName : 'li',
  render: function(){
    var name = this.model.get('name');
    this.$el.text(name);
    $('#viewUsers').prepend(this.$el);
  }
})
