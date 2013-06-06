
// this is the edit view, expects the Student model
StudentEditView = Backbone.View.extend({

  events: {
    'click .save': 'save',
    'click .cancel': 'render',
  },

  initialize: function() {

    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').html(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentListEditTemplate(this.model.attributes) );
    
  },
  // saving the attributes below
  save: function() {
    this.model.set({ 
      name: this.$el.find('.name-input').val(),
      surname: this.$el.find('.surname-input').val(),
      email: this.$el.find('.email-input').val(),
      age: this.$el.find('.age-input').val(),
      course: this.$el.find('.course-input').val()
      
    });
    console.log('tryme')
  }

});
