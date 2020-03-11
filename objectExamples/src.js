function doEx1(){
  var obj = {
    year: "2011",
    make: "Ford",
    model: "Fiesta",
    color: "Light Green"
  };
  $("#output").val(Object.keys(obj));
}

function doEx2(){
  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
  };
  let str = "Before: " + JSON.stringify(student);

  delete student.rollno;

  str += "\n\nAfter: " + JSON.stringify(student);
  $("#output").val(str)
}

function doEx3(){
  var obj = {
    name: "John",
    lastName: "Doe",
    age: 30
  };

  $("#output").val(JSON.stringify(obj) + "\n" + "Length: " + Object.keys(obj).length);
}

function doEx4(){
  var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
   var array = [];
   for(var lib of library) array.push(lib.readingStatus);
   $("#output").val(array);
}
