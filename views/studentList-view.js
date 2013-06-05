StudentListView = Backbone.View.extend({

  

  events: {
    'click .edit': 'edit',
    'click .delete': 'delete',
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
    this.$el.html(studentListViewTemplate(this.model.attributes) );
    
  },

  delete: function(){
    this.model.collection.remove(this.model);
    this.remove();
  },

  edit: function(){
    view = new StudentEditView({
      model: this.model
    })
/*    this.$el.html( studentListEditTemplate(this.model.attributes) )
*/  },

  save: function() {
    myStudents.add({ 
      name: this.$el.find('.name-input').val(),
      surname: this.$el.find('.surname-input').val(),
      email: this.$el.find('.email-input').val(),
      age: this.$el.find('.age-input').val(),
      course: this.$el.find('.course-input').val()
      
    });
    console.log('tryme')
  }

});


