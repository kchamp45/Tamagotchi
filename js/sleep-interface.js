$(document).ready(function() {
  $('#sleep-form').submit(function(event) {
    event.preventDefault();
    let toySleep = $('#sleep').val();
    let bobby = tamatoy;
    switch(toySleep) {
      case "noonNap": bobby.noonNap("long");
                      break;
      case "snooze": bobby.snooze("long");
                      break;
      case "hibernate": bobby.hibernate("long");
                     break;
    }
    // let fn = window[toyPlay];
    // if(typeof fn === "function") fn("game");
    let sleep = bobby.sleepLevel;
    $('#rest').text(sleep);
  });
});
