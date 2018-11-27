$(document).ready(function () {
  var result = $("#result");
  $("#charinput").on("keyup", function () {
    let text = $("#charinput").val();
    result.html("");
    $("#disp").html("");
    for (let i = 0; i < text.length; i++) {

      if (confuseText(text[i])) {
        result.append("<div class='confusedchar char' id='char" + i + "'>" + text[i] + "</div>")
        let k = i;
        $("#char" + k).hover(function () {
          let offsets = $("#char" + k).offset();
          //Jitter position a little randomly, more so for left so it seems like someone scribbled it on.
          explainText(text[k], offsets.top + 100, offsets.left, k);
        });
      } else {
        result.append("<div class='char' id='char" + i + "'>" + text[i] + "</div>")
        let k = i;
        $("#char" + k).hover(function () {
          $("#disp").html("");
        });

      }
    };
  })
});

function explainText(text, top, left, k) {
  //add svg arrow into page
  $("#disp").html("<i class='fas fa-arrow-up'></i><div id='dispchar" + k + "'>That's an <span style='font-size:2rem'>" + text + "</span> (" + soundText(text) +  ")...</div>")
  console.log("hover " + k);
  var offsets = $("#char" + k).offset();
  $("#disp i").css("top", top - 20);
  $("#disp i").css("left", "calc(" + left + "px - 3.15rem)");
  $("#dispchar" + k).css("top", top);
  if (text === "l") {
    $("#dispchar" + k).css("left", "calc(" + left + "px - 3.7rem)");
  }
  else if (text === "1") {
    $("#dispchar" + k).css("left", "calc(" + left + "px - 3.40rem)");
  }
  else {
    $("#dispchar" + k).css("left", "calc(" + left + "px - 3.45rem)");
  }
  
}

function confuseText(test) {
  switch (test) {
    case 'i':
    case 'I':
    case 'L':
    case 'l':
    case '1':
      return true;
    default:
      return false;
  }
}

function soundText(test) {
  switch (test) {
    case 'i':
      return 'eye';
    case 'I':
      return 'eye';
    case 'L':
      return 'el';
    case 'l':
      return 'el';
    case '1':
      return 'one';
    default:
      return 'none';
  }
}