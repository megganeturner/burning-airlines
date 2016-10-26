var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  render: function () {
    var template = $('#appView').html();
    var tempMaker = _.template(template);
    this.$el.html(tempMaker(this.model.toJSON()));
    // var template = _.template( $("#appView").html(), {} );
    // this.$el.html( template );

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render();

    // this.$el.html( $('#appView').html() );
  }
});

var app_view = new AppView({ el: $("#main") });
