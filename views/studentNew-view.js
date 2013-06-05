StudentNewView = Backbone.View.extend({

  events: {
    'click .save': 'save',
  },

  initialize: function() {

   /*Listen for new students in the collection,
      and instantiate a view for each*/
    this.listenTo(myStudents, 'add', function(newStudent){
      this.render();
    });

    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').append(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentNewTemplate() );
    
  },

  viewGrid: function () {
    myStudents.each(function(student){
      new StudentGridView({
        model: student
      });
    })
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
