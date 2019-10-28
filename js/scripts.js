$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();

    // var inputperson = $('input#person').val();
    // var inputanimal = $('input#animal').val();
    // var inputnoun = $('input#noun').val();
    // var inputverb = $('input#verb').val();
    // var inputadjective = $('input#adjective').val();
    //
    // $(".person1").text(inputperson);

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#Story").show();
  });
});
