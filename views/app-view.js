AppView = Backbone.View.extend({

  events:{
    'click .add': 'add',
    'click .view-table': 'viewTable',
    'click .view-grid': 'viewGrid',
  },

  initialize: function() {
    /*create the collection of students*/
    myStudents = new Students();
    
    myStudents.add([
      {name: 'Andrew', surname: 'Mcintee', age: '19', email: 'me@andrewmcintee.com', course: 'Front-end Engineering', image: 'images/50X50.jpg'},
      {name: 'Daniel', surname: 'Jeffords', age: '29', email: 'daniel.jeffords@gmail.com', course: 'Front-end Engineering', image: 'images/50X50.jpg'},
      {name: 'Jennifer', surname: 'Ngetich', age: '25', email: 'mjennifer.ngetich@gmail.com', course: 'Front-end Engineering', image: 'images/50X50.jpg'}
    ]);

    /*store references to underscore templates*/
    appViewTemplate = _.template( $('#app-view-template').html() );

    studentListEditTemplate = _.template( $('#student-list-edit-template').html() );

    studentGridTemplate = _.template( $('#student-grid-template').html() );
    
    studentListViewTemplate = _.template( $('#student-list-view-template').html() );
    
    studentNewTemplate = _.template( $('#student-new-template').html() );
    
    studentFinalTemplate = _.template( $('#student-final-template').html() );


    /*Listen for new students in the collection,
      and instantiate a view for each*/
    this.listenTo(myStudents, 'change', function(newStudent){
      this.viewTable();
    });

    this.render()
  },

 
  

  add:function (){
    $('.grid-container').html('')
    new StudentNewView()
  },
  
  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.container').html(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(appViewTemplate() );
    
  },

  viewGrid: function () {
    // remove contents of .grid-container
    $('.grid-container').html('')

    // loop through each student in collection,
    // and each into the StudentGridView
    myStudents.each(function(student){
      new StudentGridView({
        model: student
      });
    })
  },

  viewTable: function () {
    console.log('hey guys!!!!!!!!!!!')

    // remove contents of .grid-container
    $('.grid-container').html('')

    // loop through each student in collection,
    // and each into the StudentListView
    myStudents.each(function(student){
      new StudentListView({
        model: student
      });
    })
  }, 

});






$(document).ready(function(){
  student = new AppView();
});
