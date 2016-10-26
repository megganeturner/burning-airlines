var app = app || {};

app.FlightSearch = Backbone.View.extend({

  initialize: function(){
    this.model.on("change", this.render, this);
  },

  render: function(){

    var dynamicTemplate = _.template($("#searchFlight").html());
    var output = dynamicTemplate(this.model.toJSON());

    this.$el.html(output);
    return this;
  }
});
