$(document).ready(function(){
  $("body").css("-webkit-user-select","none");
  $("body").css("-moz-user-select","none");
  $("body").css("-ms-user-select","none");
  $("body").css("-o-user-select","none");
  $("body").css("user-select","none");
});

$(document).ready(function() {
  // Declare variables
  var current_number = generateRandomNumber(1,300);
  var count = 10;
  var incorrect = 0;
  $('#container').hide();


  //Define a function that checks for the possibilities
  function checkCurrentNumber() {
    // 15 is first because if it's divisible by 15, it should return 'fizzbuzz' instead of running any other possibilities.
    if (current_number % 15 == 0) {
      return 'fizzbuzz';
    } else if (current_number % 3 == 0) {
      return 'fizz';
    } else if (current_number % 5 == 0) {
      return 'buzz';
      // check for all of the above conditions, if none - print the current_number
    } else {
      return current_number;
    }
  }

  // Updating status for Current number, wrong answers and counts left.
  function updateStats() {
    $('.current_number').text(current_number);
    $('.stat-incorrect').text("Incorrect: " + incorrect);
    $('.stat-count').text("Turns left: " + count);
  }

  // At the end, update the result to show the data to the user.
  function updateEndCard() {
    $('h3:nth-child(2)').text("Accuracy: " + (10-incorrect));
    $('h3:nth-child(3)').text("Incorrect: " + incorrect);
  }

  //When a user clicks the start button on the form execute this.
  $('.start_form').on('submit', function(e) {
    e.preventDefault();

    $('#container').show();
    // hide the main display page
    $('.title_card').hide();
    //display the next page with input field.
    $('.text').focus();
    $('.end').show();
    updateStats();
  })

  // When a user submits the answer on the input field
  $('.input_form').on('submit', function(e) {
    e.preventDefault();

    var input = $('.text').val().toLowerCase().trim(),
        test = checkCurrentNumber();

    $('.text').val('');

    if (test == input) {
      count -- ;

      if(count == 0) {
        updateEndCard();
        $('.end').show();
      } else {
        current_number = generateRandomNumber(1,300);
        updateStats();
      }
    } else {
        incorrect++;
        updateStats();
    }
  });


  $('.body').disableSelection();

});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max);
}
