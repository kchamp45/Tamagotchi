import { tamatoy } from './../js/tama.js';
const apiKey = require('./../.env').apiKey;

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
  let now = 0;
  setInterval(function(){
    now++;
    newBackground(now);
  }, 1000);
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.giphy.com/v1/gifs/PJdv4R4xnqhUI?api_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    const body = JSON.parse(response);
    $('#show').attr('src', body.data.images.original.url);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});

function newBackground(start){
  let now = start;
  let backgrounds = ['url(images/forest-day.jpg)', 'url(images/forest-night.jpg)'];
  // let colors = ["black", "white"];
  now = now % backgrounds.length;
  $('body').css('background', backgrounds[now]);
  $('body').toggleClass('colorWhite');
  // document.body.style.color = 'white';
  // console.log("hi");
}
