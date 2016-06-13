console.log('loaded...');

// Declare variables
var current_number = Math.floor(Math.random() * 300);
var count = 10;
var incorrect = 0;
var clock;
var current_time;

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
  $('h3:nth-child(2)').text("Incorrect: " + incorrect);
  $('h3:nth-child(3)').text("Accuracy: " + (10-miss)));
}

//When a user clicks the start button on the form execute this.
$('.start_form').on('submit', function(e) {

})
