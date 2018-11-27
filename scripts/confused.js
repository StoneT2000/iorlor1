$(document).ready(function(){
  var result = $("#result");
  $("#charinput").on("keyup", function() {
    var text = $("#charinput").val();
    result.html("");
    for (var i = 0; i < text.length; i++){
      
      if (confuseText(text[i])) {
        result.append("<div class='confusedchar char' id='char" + i +"'>" + text[i] + "</div>")
        $("#char" + i).on("hover", function(){
          $("#disp").html("<div>That's an I...</div>")
        })
      }
      else {
        result.append("<div class='char' id='char" + i + "'>" + text[i] + "</div>")
      }
    };
  })
});

function confuseText(test){
  switch(test){
    case 'i':
    case 'I':
    case 'L':
    case 'l':
      return true;
    default:
      return false;
  }
}