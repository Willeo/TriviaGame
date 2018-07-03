// document ready block 
$(document).ready(function(){


var correctAnswer = 0;
var incorrectAnswer = 0;
var stopTime = clearTimeout();
var count=10;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

var myList = ["who wrote this?", "what is this?", "when did you write this?", "why", "how"];
var rand = myList[Math.floor(Math.random() * myList.length)];

$("#whens").append(rand);
function timer() {

  count=count-1;
  $("#timer").html(count);
  if (count <= 0) {
     clearInterval(counter);
     //counter ended, Times up      
     $("#results").html("Times up!");
     return;
  }
  console.log(count);  
  //Do code for showing the number of seconds here
}// end timer function

}); // end document ready