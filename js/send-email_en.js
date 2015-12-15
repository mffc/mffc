
$("#contact_form").submit(function(event){
  event.preventDefault();
  var form = $(this);
  var name = $(this).find("#inputname").val();
  var phone = $(this).find("#inputphone").val();
  var email = $(this).find("#inputemail").val();
  var church = $(this).find("#inputchurch").val();
  var question = $(this).find("#inputquestion").val();

  $.post("../process.php", {name: name, phone: phone, email: email, church: church, question: question})
  .done( function(data) {

    $('#contact_form_status').html("<div class='alert alert-success'>");
    $('#contact_form_status > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    .append( "</button>");
    $('#contact_form_status > .alert-success')
    .append("<strong>Submit Successful!</strong> &nbsp; We shall contact you soon.");
    $('#contact_form_status > .alert-success')
    .append('</div>');

    //clear
    //all
    //fields
    $('#contact_form').trigger("reset");
  });

});

