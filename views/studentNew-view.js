StudentNewView = Backbone.View.extend({

  events: {
    'click .save': 'save',
  },

  initialize: function() {
    // rendering the .grid-container
    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').append(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentNewTemplate() );
    
  },

  save: function() {
    myStudents.add({ 
      firstName: this.$el.find('.name-input').val(),
      surname: this.$el.find('.surname-input').val(),
      email: this.$el.find('.email-input').val(),
      age: this.$el.find('.age-input').val(),
      course: this.$el.find('.course-input').val()
      
    });
    console.log('tryme')
  }

});
