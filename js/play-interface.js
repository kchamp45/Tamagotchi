
$(document).ready(function() {
  $('#play-form').submit(function(event) {
    event.preventDefault();
    let toyPlay = $('#play').val();
    let bobby = tamatoy;
    switch(toyPlay) {
      case "playChess": bobby.playChess("game");
                      break;
      case "playCatch": bobby.playCatch("game");
                      break;
      case "playRollover": bobby.playRollover("game");
                     break;
    }
    // let fn = window[toyPlay];
    // if(typeof fn === "function") fn("game");
    let happy = bobby.happyLevel;
    $('#game').text(happy);
  });
});
