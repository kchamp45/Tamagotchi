import { tamatoy } from './../js/tama.js';

$(document).ready(function() {
  $('#feed-form').submit(function(event) {
    event.preventDefault();
    let toyFeed = $('#feed').val();
    let bobby = tamatoy;
    // let fn = window[toyFeed];
    // if(typeof fn === "function") fn("dirt");
    switch(toyFeed) {
      case "eatSmall": bobby.eatSmall("dirt");
                      break;
      case "eatMedium": bobby.eatMedium("dirt");
                      break;
      case "eatLarge": bobby.eatLarge("dirt");
                     break;
    }
    let foodAmt = bobby.foodLevel;
    $('#amtOfFood').text(foodAmt);
  });
});
