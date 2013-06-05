/*Student Directory Model...*/


Student = Backbone.Model.extend({
  defaults: {
    firstName: '',
    surname: '',
    email: '',
    age: '',
    course: '',
    studentImg: "images/50X50.jpg"
     
},
 
});