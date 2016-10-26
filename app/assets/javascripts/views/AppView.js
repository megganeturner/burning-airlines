var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  render: function () {
<<<<<<< HEAD
    var template = $('#appView').html();
    var tempMaker = _.template(template);
    this.$el.html(tempMaker(this.model.toJSON()));
    // var template = _.template( $("#appView").html(), {} );
    // this.$el.html( template );
=======

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render();
>>>>>>> f0191f8fdb35c3a8fcba9a95681b2a70db69b324

    // this.$el.html( $('#appView').html() );
  }
});
<<<<<<< HEAD

var app_view = new AppView({ el: $("#main") });
=======
>>>>>>> f0191f8fdb35c3a8fcba9a95681b2a70db69b324
