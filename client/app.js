$(document).ready(function(){
  console.log("Loads");
  $("#catForm").on("submit", function(event) {
    event.preventDefault();

    var values = {};
    console.log("HERE: ", $("#catForm"));
    $.each($("#catForm").serializeArray(), function(i, field){//these names can be anything just the order matters
      values[field.name] = field.value; //these name/value names are important to keep
    });
    $.ajax({
      type: "POST",
      url:"/add",
      data: values,
      success: function(data){
        $.ajax({
          type: "GET",
          url:"/cats",
          success: function(catsObject){
            console.log('inside of success ', catsObject);
            appendDom(catsObject);
            function appendDom(catsObject){
              $('#putCatsHere').empty();
              for (var i = 0; i < catsObject.length; i++) {
                $('#putCatsHere').append('<p>'+ catsObject[i].name +'</p>');
              }
              console.log('inside of appendDom ', catsObject);



            };
          }
        });
      }
    });

  });

});
