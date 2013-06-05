StudentGridView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {

    /*Listen for new students in the collection,
      and instantiate a view for each*/
    this.listenTo(myStudents, 'add', function(newStudent){
      this.render();
    });

    this.render()
  },

  render: function () {
    console.log('HEEEEEEEEEEEEEEYYYYYYYYYYYY')
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').append(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentGridTemplate(this.model.attributes) );
    
  }

});


