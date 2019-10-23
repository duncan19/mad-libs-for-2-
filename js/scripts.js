$(document).ready(function() {
  $('#formOne').submit(function(event) {

    var inputperson = $('input#person').val();
    var inputanimal = $('input#animal').val();
    var inputnoun = $('input#noun').val();
    var inputverb = $('input#verb').val();
    var inputadjective = $('input#adjective').val();

    $(".person1").text(inputperson);

    $("#Story").show();
    event.preventDefault();
  })
})
