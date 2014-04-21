
$("#contact_form").submit(function(event){
  event.preventDefault();
  var form = $(this);
  var name = $(this).find("#inputname").val();
  var phone = $(this).find("#inputphone").val();
  var email = $(this).find("#inputemail").val();
  var church = $(this).find("#inputchurch").val();
  var question = $(this).find("#inputquestion").val();
  
  $.post("process.php", {name: name, phone: phone, email: email, church: church, question: question})
    .done( function(data) {
      alert ("done");
    });

});

