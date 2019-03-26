var scorecard = document.querySelectorAll('.scorecard');
var removeButton = document.querySelector('.remove');
var chall_1= document.querySelector('#chall-1');
var chall_2= document.querySelector('#chall-2');
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
var randomNumber;

var minInputNumber = parseInt(minInput.value);
var maxInputNumber = parseInt(maxInput.value);
var guessInput1 = document.querySelector('#guess-1');
var guessInput2 = document.querySelector('#guess-2');
var c1GuessOutput = document.querySelector('.chall-1-score');
var c2GuessOutput = document.querySelector('.chall-2-score');
var chall1response = document.querySelector('.chall-1-response');
var chall2response = document.querySelector('.chall-2-response');
var resetButton = document.querySelector('.reset-button');
var challInputs = document.querySelectorAll('.chall-inputs');
var clearButton = document.querySelector('.clear');
var scorecard = document.querySelector(".scorecard");
var wrapper = document.querySelector(".wrapper");
var numberOfGuesses = document.querySelector(".guess-count")
var minRangeError = document.querySelector(".min-range-error");
var guess1error = document.querySelector(".guess-1-error")
var guess2error = document.querySelector(".guess-2-error")
var minRangeError = document.querySelector(".min-range-error")
var maxRangeError = document.querySelector(".max-range-error")
var updateError = document.querySelector(".update-error")
var guessCount = 0;
var maxValue;
var minValue;


function getRandomInt(minValue, maxValue) {
  	randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
function challengerwin (nameInput) {
    wrapper.insertAdjacentHTML('afterbegin', '<article class="scorecard">\
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
            <p class="guess-count">' + guessCount+ ' GUESSES</p>\
            <p>0 MINUTES</p>\
            <button class="remove">X</button>\
          </section>\
          </article>\
');
}

//Updates Current Range on DOM
//Keeps range between 0 and 800
/*
update.addEventListener('click', function(e) {
  guessCount = 0;
  if (maxInput.value.length < 1 || minInput.value.length < 1) {
  updateError.innerText = "Please put Numbers into the Min and Max Range"; 
  } else if (parseInt(minInput.value) < 1 || parseInt(maxInput.value) > 800) {
  updateError.innerText = "Please, choose a range between 0 and 800";
  } else {
  updateError.innerText = "";  
	lowOutput.innerText= minInput.value;
	highOutput.innerText= maxInput.value;
	maxValue = parseInt(maxInput.value);
	minValue = parseInt(minInput.value);
	getRandomInt(minValue, maxValue);
	console.log(randomNumber);
}});;*/

// Random Number Generator at Win
function winnerNewNumber () {
  maxValue = maxValue + 10;
  minValue = minValue - 10;
  lowOutput.innerText= minValue;
  highOutput.innerText= maxValue; 
  guessCount = 0;
  getRandomInt(minValue, maxValue);
  console.log(randomNumber);
}

//Updates Challenger 1 Name on DOM
submitButton.addEventListener('click', function(e) {
	for (var i = 0 ; i < chall1Name.length ; i++)
	chall1Name[i].innerText = nameInput1.value;
});
//Updates Challenger 2 Name on Dom
submitButton.addEventListener('click', function(e) {
  for (var i = 0 ; i < chall2Name.length ; i++)
  chall2Name[i].innerText = nameInput2.value;
    
});
//When Click Submit Button 
submitButton.addEventListener('click', function(e) {
  c1GuessOutput.innerText = guessInput1.value;
  c2GuessOutput.innerText = guessInput2.value;
  guessInputValue1 = parseInt(guessInput1.value)
  guessInputValue2 = parseInt(guessInput2.value)

  });
//Winner 
submitButton.addEventListener('click', function(e) {
  guessCount = guessCount + 2;
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
} else if (guessInputValue2 > randomNumber){
  chall2response.innerText = "that's too high" 
} else {
  chall2response.innerText = "that's too low" 
}});




//Reset Button Clears Names + Guesses + Creates New Random Number
resetButton.addEventListener('click', function(e) {
  for (var i = 0 ; i < challInputs.length ; i++)
    challInputs[i].reset();
  guessCount = 0;
  getRandomInt(minValue, maxValue);
  console.log(randomNumber)
});

// Color change when button click
// document.getElement('button').addEventListener("click", fchangeColor); {
//   this.style.backgroundColor = #D0D2D3;
//   return false;
// }

clearButton.disabled = true;
resetButton.disabled = true;


// Function to disable Clear and Reset Buttons until input name is typed in
function disableClearResetButton(inputName) {
  if(inputName.value.length < 1){
 
  clearButton.disabled = true;
  resetButton.disabled = true;
} else {
  resetButton.disabled = false;
  clearButton.disabled = false;
}};
//Function to disable Clear buttons 
function disableClearButton(inputName) {
if(inputName.value.length < 1 ){
  resetButton.disabled = true;
} else {
  resetButton.disabled = false;
}}
//Clear and Reset get disabled up keystroke on Name Inputs 
nameInput1.addEventListener("keyup",function(){
  disableClearButton(nameInput1);
});

//Alphanumeric error
nameInput1.addEventListener('keyup', function() {
  var nameInput1Error = document.querySelector(".name-input-1-error");
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput1.value) !== true) {
  nameInput1Error.innerText = "Please, use only numbers and letters";
} else {
nameInput1Error.innerText = "";
}
});

nameInput2.addEventListener('keyup', function() {
  var nameInput2Error = document.querySelector(".name-input-2-error");
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput2.value) !== true) {
  nameInput2Error.innerText = "Please, use only numbers and letters";
} else {
nameInput2Error.innerText = "";
}
});

nameInput2.addEventListener("keyup",function(){
  disableClearButton(nameInput2);
});
//Clear gets disabled upon keystroke on Guess Inputs
guessInput1.addEventListener("keyup",function(){
  disableClearResetButton(guessInput1);
});
guessInput2.addEventListener("keyup",function(){
  disableClearResetButton(guessInput2);
});

//Clear and Reset gets disabled upon Reset Button
resetButton.addEventListener("click", function() {
  clearButton.disabled = true;
  resetButton.disabled = true;
})

//Clear gets disabled upon clear Button
clearButton.addEventListener("click", function() {
  clearButton.disabled = true;
})

clearButton.addEventListener("click", function() {
  form1.reset();
  form2.reset();
})
//Min range higher than guess
guessInput1.addEventListener("keyup",function(){
  if (parseInt(guessInput1.value) > maxValue ){ 
  console.log("working")
  guess1error.innerText = "Put a number lower than the Max Range";
  submitButton.disabled = true;
  } else if (parseInt(guessInput1.value) < minValue ) {
    guess1error.innerText = "Put a number higher than the Min Range";
  } else {
  guess1error.innerText = ""
  submitButton.disabled = false
  }
});
//Max range higher than guess 2
guessInput2.addEventListener("keyup",function(){
  if (parseInt(guessInput2.value) > maxValue ){ 
  console.log("working")
  guess2error.innerText = "Put a number lower than the Max Range";
  submitButton.disabled = true;
  } else if (parseInt(guessInput2.value) < minValue ) {
    guess2error.innerText = "Put a number higher than the Min Range";
  }
  else {
  guess2error.innerText = ""
  submitButton.disabled = false
  }
});
//Min range higher than Max range
minInput.addEventListener("keyup",function(){
  if (parseInt(minInput.value) > parseInt(maxInput.value)) { 
  console.log("working")
  minRangeError.innerText = "Put a number lower than the Max Range";
  update.disabled = true;
  } else {
  minRangeError.innerText = ""
  update.disabled = false
  }
});
maxInput.addEventListener("keyup",function(){
  if (parseInt(minInput.value) > parseInt(maxInput.value)) { 
  console.log("working")
  maxRangeError.innerText = "Put a number higher than the Min Range";
  update.disabled = true;
  } else {
  maxRangeError.innerText = ""
  update.disabled = false
  }
});

nameInput1.addEventListener('keyup', function() {
  var nameInput1Error = document.querySelector(".name-input-1-error");
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput1.value) !== true) {
  nameInput1Error.innerText = "Please, use only numbers and letters";
} else {
nameInput1Error.innerText = "";
}
});
<<<<<<< HEAD

nameInput2.addEventListener('keyup', function() {
  var nameInput2Error = document.querySelector(".name-input-2-error");
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput2.value) !== true) {
  nameInput2Error.innerText = "Please, use only numbers and letters";
} else {
nameInput2Error.innerText = "";
}
});




/*



=======
>>>>>>> 2ndAttemptFixCommit

nameInput2.addEventListener('keyup', function() {
  var nameInput2Error = document.querySelector(".name-input-2-error");
  var regex = /^[0-9a-zA-Zs]+$/;
  if(regex.test(nameInput2.value) !== true) {
  nameInput2Error.innerText = "Please, use only numbers and letters";
} else {
nameInput2Error.innerText = "";
}
});







//Boom Card
//Winner 
/*
submitButton.addEventListener('click', function(e) {
  if (guessInputValue1 === randomNumber) {
  wrapper.insertAdjacentHTML('afterbegin', '<article class="scorecard">\
          <section class="vs">\
            <h3 id="scorename">name</h3>\
            <p>vs</p>\
            <h3 class="challenger-2-name">chall2Name</h3>\
          </section>\
          <section class="winner">\
            <h1>chall1Name</h1>\
            <p id="winner-light">WINNER</p>\
          </section>\
          <section class="results">\
            <p class="guess-count">0 GUESSES</p>\
            <p>0 MINUTES</p>\
            <button class="remove">X</button>\
          </section>\
          </article>\
');
}
  if (guessInputValue2 === randomNumber) {

}  else {
  
}});
/*
guessInput1.addEventListener('keyup', function(e) {
  if (parseInt(guessInput1.value) < minInput.value) {
  submitButton.disabled = true
  guess1error.innerHTML = "<p>Please enter a number that is higher than the Min Range</p>"

  }else {

  }
});
*/