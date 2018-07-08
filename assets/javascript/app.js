// document ready block
$(document).ready(function() {
  // add start / reset function
  var userPick = null;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var stopTime = clearTimeout();
  var count = 10;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  var questions = [
    {
      question: "What is the surname given to bastards born in Dorne?",
      choices: ["Sands", "Stone", "Snow", "Flower"],
      correct: 0
    },
    {
      question: "'The Mountain' is the nickname for which character?",
      choices: [
        "Oberyn Martell",
        "Sandor Clegane",
        "Gregor Clegane",
        "Gerold Clegane"
      ],
      correct: 1
    },
    {
      question:
        "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
      choices: [
        "Ser Jeor Mormont",
        "Ser Loras Tyrell",
        "Ser Barristan Selmy",
        "Ser Jaime Lannister"
      ],
      correct: 3
    },
    {
      question: "Who was Margaery Tyrell's first husband?",
      choices: [
        "Tommen Baratheon",
        "Stannis Baratheon",
        "Joffrey Baratheon",
        "Renly Baratheon"
      ],
      correct: 3
    },
    {
      question: "How many times has Sansa Stark been married?",
      choices: ["Once", "Twice", "Three times", "None"],
      correct: 1
    }
  ];
  var showq = function(questions) {
    console.log(questions.question + questions.choices);
    $("#qblock").text(questions.question);
    // $("#options").html("<input>", "</input>");
    // $("input").attr("type=radio");
    // $("input").text(questions.choices);
  };

  // var showA = function(questions) {
  //   console.log(questions.choices);
  // };

  //var rand = questions[Math.floor(Math.random() * questions.length)];
  questions.map(showq);
  // for (var i = 0; i < questions.length; i++) {
  //
  //   $("#qblock").html(questions[i].question);
  // }
  // for (var j = 0; j < questions.length; j++) {

  // logic for the selection - create dymanic creation of input for each choice
  // add if esle for selection

  // timer function works
  function timer() {
    count = count - 1;
    $("#timer").html(count);
    if (count <= 0) {
      clearInterval(counter);
      //counter ended, Times up
      $("#timer").html("Times up!");
      return;
    }
    console.log(count);
    //Do code for showing the number of seconds here
  } // end timer function
}); // end document ready
