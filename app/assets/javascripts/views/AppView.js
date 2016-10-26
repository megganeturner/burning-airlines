var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  render: function () {
    var template = $('#appView').html();
    var tempMaker = _.template(template);
    this.$el.html(tempMaker(this.model.toJSON()));
    // var template = _.template( $("#appView").html(), {} );
    // this.$el.html( template );

    // this.$el.html( $('#appView').html() );
  }
});

var app_view = new AppView({ el: $("#main") });
