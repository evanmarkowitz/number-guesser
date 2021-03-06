var scorecard = document.querySelectorAll('.scorecard');
var removeButton = document.querySelector('.remove');
var minInput = document.querySelector('#min');
var maxInput = document.querySelector('#max');
var lowOutput = document.querySelector('.low')
var highOutput = document.querySelector('.high')
var update = document.querySelector('.update');
var chall1Name = document.querySelectorAll('.challenger-1-name')
var chall2Name = document.querySelectorAll('.challenger-2-name')
var submitButton = document.querySelector('.submit')
var nameInput1 = document.querySelector('#chall-1')
var nameInput2 = document.querySelector('#chall-2')
var form1 = document.querySelector("#form-1")
var form2 = document.querySelector("#form-2")
var guessInput1 = document.querySelector('#guess-1');
var guessInput2 = document.querySelector('#guess-2');
var c1GuessOutput = document.querySelector('.chall-1-score');
var c2GuessOutput = document.querySelector('.chall-2-score');
var chall1response = document.querySelector('.chall-1-response');
var chall2response = document.querySelector('.chall-2-response');
var resetButton = document.querySelector('.reset-button');
var challInputs = document.querySelectorAll('.chall-inputs');
var clearButton = document.querySelector('.clear');
var wrapper = document.querySelector('.wrapper');
var numberOfGuesses = document.querySelector('.guess-count')
var minRangeError = document.querySelector('.min-range-error');
var guess1error = document.querySelector('.guess-1-error')
var guess2error = document.querySelector('.guess-2-error')
var minRangeError = document.querySelector('.min-range-error')
var maxRangeError = document.querySelector('.max-range-error')
var updateError = document.querySelector('.update-error')
var submitError = document.querySelector('.submit-error')
var nameInput1Error = document.querySelector('.name-input-1-error');
var nameInput2Error = document.querySelector('.name-input-2-error');
var guessCount = 0;
var maxValue = 100;
var minValue = 1;
var guessInput1;
var guessInput2;
var randomNumber;

function getRandomInt(minValue, maxValue) {
  	randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  getRandomInt(minValue,maxValue);

clearButton.disabled = true;
resetButton.disabled = true;

update.addEventListener('click', function(e) {
  guessCount = 0;
  if (maxInput.value.length < 1 || minInput.value.length < 1) {
  updateError.innerText = "Please put Numbers into the Min and Max Range";
  } else {
  updateError.innerText = "";  
	lowOutput.innerText= minInput.value;
	highOutput.innerText= maxInput.value;
	maxValue = parseInt(maxInput.value);
	minValue = parseInt(minInput.value);
	getRandomInt(minValue, maxValue);
}
});

// Random Number Generator at Win
function winnerNewNumber () {
  maxValue = maxValue + 10;
  minValue = minValue - 10;
  lowOutput.innerText = minValue;
  highOutput.innerText = maxValue; 
  guessCount = 0;
  getRandomInt(minValue, maxValue);
}

//Function to Changes Names on Dom
function changeName(name, nameInput, guessinput, guessoutput) {
  for (var i = 0 ; i < name.length ; i++)
  name[i].innerText = nameInput.value;
  guessoutput.innerText = guessinput.value;
}

//Submit Button 
submitButton.addEventListener('click', function(e) {
  guessInputValue1 = parseInt(guessInput1.value);
  guessInputValue2 = parseInt(guessInput2.value);
  guessCount = guessCount + 2;
  if (nameInput1.value.length < 1 || nameInput2.value.length < 1 || guessInput1.value.length < 1 || guessInput2.value.length < 1) {
  submitError.innerText = "Please fill out all fields";
  } else {
  changeName(chall1Name, nameInput1, guessInput1, c1GuessOutput);
  changeName(chall2Name, nameInput2, guessInput2, c2GuessOutput);
  submitError.innerText = "";
  }
  if (guessInputValue1 === randomNumber) {
  chall1response.innerText = "Boom!";
  challengerwin (nameInput1.value)
  winnerNewNumber(); 
  form1.reset();
  form2.reset();
  } else if (guessInputValue1 > randomNumber){
  chall1response.innerText = "that's too high" 
  } else {
  chall1response.innerText = "that's too low" 
  }  
  if (guessInputValue2 === randomNumber) {
  chall2response.innerText = "Boom!";
  challengerwin (nameInput2.value)
  winnerNewNumber(); 
  form1.reset();
  form2.reset();
  } else if (guessInputValue2 > randomNumber) {
  chall2response.innerText = "that's too high" 
  } else {
  chall2response.innerText = "that's too low" 
  }
});

//Reset Button Clears Names + Guesses + Creates New Random Number
resetButton.addEventListener('click', function(e) {
  for (var i = 0 ; i < challInputs.length ; i++)
  challInputs[i].reset();
  guessCount = 0;
  getRandomInt(minValue, maxValue);
});

// Function to disable Clear and Reset Buttons until input name is typed in
function disableClearResetButton(inputName) {
  if(inputName.value.length < 1) {
  clearButton.disabled = true;
  resetButton.disabled = true;
  } else {
  resetButton.disabled = false;
  clearButton.disabled = false;
  }
};

//Function to disable Clear buttons 
function disableClearButton(inputName) {
  if(inputName.value.length < 1 ) {
  resetButton.disabled = true;
  } else {
  resetButton.disabled = false;
  }
}

//Clear and Reset gets disabled upon Reset Button
resetButton.addEventListener("click", function() {
  clearButton.disabled = true;
  resetButton.disabled = true;
});

//Clear gets disabled upon clear Button
clearButton.addEventListener("click", function() {
  clearButton.disabled = true;
});
clearButton.addEventListener("click", function() {
  form1.reset();
  form2.reset();
});

// Refactored Guess Out of Range
function guessOutOfRange (guessInput, guessError) {
  if (parseInt(guessInput.value) > maxValue ) { 
  guessError.innerText = "Put a number lower than the Max Range";
  submitButton.disabled = true;
  } else if (parseInt(guessInput.value) < minValue ) {
    guessError.innerText = "Put a number higher than the Min Range";
  } else {
  guessError.innerText = "";
  submitButton.disabled = false;
  }
}

guessInput1.addEventListener('keyup', function() {
  guessOutOfRange(guessInput1, guess1error);
  disableClearResetButton(guessInput1);
});
guessInput2.addEventListener('keyup', function() {
  guessOutOfRange(guessInput2, guess2error);
  disableClearResetButton(guessInput2);
});

//Min Max range Errors
function rangeConflict(errorLoc, errorMess) {
  if (parseInt(minInput.value) > parseInt(maxInput.value)) { 
  errorLoc.innerText = errorMess;
  update.disabled = true;
  } else {
  errorLoc.innerText = "";
  update.disabled = false;
  }
}

minInput.addEventListener('keyup', function() {
  rangeConflict(minRangeError, "Put a number lower than the Max Range");
});
maxInput.addEventListener('keyup', function() {
  rangeConflict(maxRangeError, "Put a number higher than the Min Range");
});

//Aplhanumeric validation refactor
function alphaNumericVal(errorLoc, nameInput) {
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput.value) !== true) {
  errorLoc.innerText = "Please, use only numbers and letters";
} else { 
  errorLoc.innerText = "";
  }
}

nameInput1.addEventListener('keyup', function(){
  alphaNumericVal(nameInput1Error, nameInput1);
  disableClearButton(nameInput1);
});
nameInput2.addEventListener('keyup', function(){
  alphaNumericVal(nameInput2Error, nameInput2);
  disableClearButton(nameInput2);
});

function challengerwin (nameInput) {
  wrapper.insertAdjacentHTML('afterbegin', 
    '<article class="scorecard">\
      <section class="vs">\
        <h3>' + nameInput1.value + '</h3>\
        <p>vs</p>\
        <h3>'+ nameInput2.value + '</h3>\
      </section>\
      <section class="winner">\
        <h1>' +  nameInput + '</h1>\
        <p id="winner-light">WINNER</p>\
      </section>\
      <section class="results">\
        <p class="guess-count">' + guessCount + ' GUESSES</p>\
        <button class="remove">X</button>\
      </section>\
    </article>\ '
);}

