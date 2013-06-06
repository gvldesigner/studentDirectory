StudentGridView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {

    // rendering the .grid-container below

    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').append(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentGridTemplate(this.model.attributes) );
    
  }

});


